import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LoginService } from 'src/app/service/login.service';
import { LoginUser, User } from 'src/app/types/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faFcebook = faFacebookSquare;
  faLinkedin = faLinkedin;
  faInsta = faInstagram;

  loginform = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private login: LoginService, private router: Router) {}

  // loginuser: LoginUser = new LoginUser();

  ngOnInit(): void {}

  onSubmit(): void {
    this.login.userLogin(this.loginform.value).subscribe((result) => {
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate(['/user']);
      console.log(result);
    });

    // console.log(response);
  }

  get email() {
    return this.loginform.get('emailId');
  }
  get password() {
    return this.loginform.get('password');
  }
}
