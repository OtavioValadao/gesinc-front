import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { DisplayMessage } from 'src/app/shared/utils/generic-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  login(){}
}
