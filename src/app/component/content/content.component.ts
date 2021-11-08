import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'userID',
    'name',
    'email',
    'department',
    'assignDate',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  faSearch = faSearch;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {}
}

export interface PeriodicElement {
  userID: number;
  name: string;
  email: string;
  department: string;
  assignDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    userID: 1,
    name: 'Hydrogen',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 2,
    name: 'Helium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 3,
    name: 'Lithium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 4,
    name: 'Beryllium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 5,
    name: 'Boron',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 6,
    name: 'Carbon',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 7,
    name: 'Nitrogen',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 8,
    name: 'Oxygen',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 9,
    name: 'Fluorine',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 10,
    name: 'Neon',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 11,
    name: 'Sodium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 12,
    name: 'Magnesium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 13,
    name: 'Aluminum',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 14,
    name: 'Silicon',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 15,
    name: 'Phosphorus',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 16,
    name: 'Sulfur',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 17,
    name: 'Chlorine',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 18,
    name: 'Argon',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 19,
    name: 'Potassium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
  {
    userID: 20,
    name: 'Calcium',
    email: 'lakshanamal100@gmail.com',
    department: 'HR',
    assignDate: '2021-10-05',
  },
];
