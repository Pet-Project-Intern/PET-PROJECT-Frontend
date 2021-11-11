import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.css']
})
export class ForgetPwComponent implements OnInit {

  faFcebook = faFacebookSquare;
  faLinkedin = faLinkedin;
  faInsta = faInstagram;

  forgetpwform = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  get email(){
    return this.forgetpwform.get('email');
  }
}
