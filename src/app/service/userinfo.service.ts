import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  private baseUrl = 'http://localhost:8084/user';
  constructor(private http: HttpClient) {}

  // getUserInfo(): UserInfo[] {
  //   // console.log(this.http.get<UserInfo[]>(`${this.baseUrl}/employee`));
  //   return this.ELEMENT_DATA;
  // }

  getEmployeeInfo(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.baseUrl}/employee`);
  }

  userLogOut(): void {
    alert('user logout sucessfull');
  }

  userSave(userDate: UserInfo): void {
    console.log(userDate);
    alert(userDate);
  }
}
