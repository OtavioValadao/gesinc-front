import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
import { DisplayMessage } from 'src/app/shared/utils/generic-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user!: User;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.service.loginUser(this.user).subscribe({
        next: (succsess) => {
          this.successProcede(succsess);
        }
      })
    }
  }

  successProcede(response: any) {
    this.loginForm.reset();

    //salva os dados no localstorage
    this.service.LocalStorage.salvarDadosLocaisUsuario(response);
    this.router.navigate(['/']);
  }
}
