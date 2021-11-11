import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/types/user';

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
    emailId: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    name: new FormControl('',[Validators.required])
  })

  message:any;
  constructor(
    private login: LoginService,
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    let response = this.login.userAdd(this.signupform.value).subscribe();
    // response.subscribe((data)=>this.message=data)
    console.log(response);
    console.log(this.signupform.value);
    // location.reload();
  }

  get email(){
    return this.signupform .get('emailId');
  }
  get password(){
    return this.signupform.get('password');
  }
  get name(){
    return this.signupform.get('name');
  }
  
}
