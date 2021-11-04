import { Component, OnInit } from '@angular/core';
import { faListUl, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  faListUl = faListUl;
  faBell = faBell;
  faUser = faUser;
}
