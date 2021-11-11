import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    name: new FormControl('',[Validators.required])
  })

  message:any;

  constructor(
    private signup: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    let resp = this.signup.userAdd(this.signupform.value);
    resp.subscribe((response)=>this.message=response)
    console.log(resp);
    // console.log(this.signupform.value);
    // this.router.navigate(['/']);
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
