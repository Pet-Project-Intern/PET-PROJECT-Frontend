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
  constructor(private Data: UserinfoService) {}

  logout() {
    this.Data.userLogOut();
  }
  ngOnInit(): void {}
}
