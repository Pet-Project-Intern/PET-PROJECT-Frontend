import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
// import Validation from './custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  faFcebook = faFacebookSquare;
  faLinkedin = faLinkedin;
  faInsta = faInstagram;

  signupform = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confpassword: new FormControl('',[Validators.required])
  })

  // signupform:FormGroup;
  // submitted:boolean = false;

  constructor() {
    
  }
  // get f(){
  //   return this.signupform.controls
  // }

  // onSubmit(){
  //   this.submitted = true;
  //   if(this.signupform.invalid){
  //     return;
  //   }
  // }
  ngOnInit(): void {
    
  }

  get email(){
    return this.signupform .get('email');
  }
  get password(){
    return this.signupform.get('password');
  }
  get confpassword(){
    return this.signupform.get('confpassword');
  }
  
}
