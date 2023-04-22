import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable, fromEvent, merge } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { AccountSerivce } from 'src/app/shared/services/accountSerivce/account-serivce.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/shared/utils/generic-form-validation';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: []
})
export class CreateAccountComponent implements OnInit, AfterViewInit {
  //Pega os dados do DOM, FomControlName. Ex: "fullName"
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  user!: User;
  createAccountForm!: FormGroup;
  success: boolean = false
  //Objeto para retorno das menssagens
  displayMessage: DisplayMessage = {};

  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidator;
  messages: Message[];

  constructor(private formBuilder: FormBuilder, private service: AccountSerivce, private router: Router) {
    this.validationMessages = {
      fullName: {
        required: 'Informe o nome completo',
      },
      userName: {
        required: 'Informe o nome de usuario',
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Conta criada com sucesso!' },
    ];
  }



  ngAfterViewInit(): void {
    //toda vez que eu tirar o foco do elemento, "blur", disparo o observable.
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    //sobreescreve a mensagem.
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.createAccountForm)
    })
  }

  ngOnInit(): void {
    this.initForm()

  }

  initForm(): void {

    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([8, 15])]);
    let confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([8, 15]), CustomValidators.equalTo(password)]);

    //"captura" os valores do formulário
    this.createAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: password,
      confirmPassword: confirmPassword
    });


    //instacia criada para devolver as menssagens de erro
    this.genericValidator = new GenericValidator(this.validationMessages)
  }

  createAccount() {
    if (this.createAccountForm.dirty && this.createAccountForm.valid) {
      this.user = Object.assign({}, this.user, this.createAccountForm.value);
      this.service.registerUser(this.user).subscribe({
        next: (succsess) => {
          this.success = true;
          setTimeout(()=>{
            this.successProcede(succsess);
          }, 2000)
        },
        error: (error) => {
          console.error(error)
        }
      })
    }
  }

  successProcede(response: any) {
    this.createAccountForm.reset();

    //salva os dados no localstorage
    this.service.LocalStorage.salvarDadosLocaisUsuario(response);

    this.router.navigate(['/login']);

  }

}


