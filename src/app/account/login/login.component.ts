import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formLogin:FormGroup;

  constructor(private fb:FormBuilder,  private route:Router) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
  }


  public criarFormLogin():FormGroup{
    return this.fb.group({
      username:["", [Validators.required, Validators.minLength(6)]],
      password:["", [Validators.required, Validators.minLength(6)]]
    })
  }


  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }


  public submitForm(){
    const {username, password} = this.formLogin.value;
    this.formLogin.reset;

    // this.loginService.login(username, password).subscribe(
    //   res => {
    //     this.toast.success("Login efetuado com sucesso");
    //     this.route.navigate(['']);
    //   },
    //   err =>{
    //     this.toast.error(err);
    //   }
    //)
  }

}
