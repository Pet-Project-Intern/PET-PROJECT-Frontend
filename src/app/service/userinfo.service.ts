import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  constructor() {}

  ELEMENT_DATA: UserInfo[] = [
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

  getUserInfo(): UserInfo[] {
    return this.ELEMENT_DATA;
  }
  userLogOut(): void {
    alert('user logout sucessfull');
  }
}

