import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faFcebook = faFacebookSquare;
  faLinkedin = faLinkedin;
  faInsta = faInstagram;

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    
  })

  constructor() { }

  ngOnInit(): void {
  }

}
