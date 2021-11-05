import { Component, OnInit } from '@angular/core';
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
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  faPowerOff = faPowerOff;
  faThLarge = faThLarge;
  faUserFriends = faUserFriends;
  faLaptopMedical = faLaptopMedical;
  faBuilding = faBuilding;
  faChartBar = faChartBar;
}
