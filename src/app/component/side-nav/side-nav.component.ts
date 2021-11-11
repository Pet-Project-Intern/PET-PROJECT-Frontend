import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/service/userinfo.service';
import {
  faPowerOff,
  faThLarge,
  faUserFriends,
  faLaptopMedical,
  faBuilding,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [UserinfoService],
})
export class SideNavComponent implements OnInit {
  faPowerOff = faPowerOff;
  faThLarge = faThLarge;
  faUserFriends = faUserFriends;
  faLaptopMedical = faLaptopMedical;
  faBuilding = faBuilding;
  faChartBar = faChartBar;
  constructor(private Data: UserinfoService, private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    // this.Data.userLogOut();
  }
  ngOnInit(): void {}
}
