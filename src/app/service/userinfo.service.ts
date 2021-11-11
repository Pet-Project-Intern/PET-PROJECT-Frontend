import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  // private baseUrl = 'http://localhost:8084/user';
  private baseUrl = 'http://127.0.0.1:3771/user';
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getEmployeeInfo(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(`${this.baseUrl}/employee`);
    // .pipe(catchError((err) =>  return throwError(err)));
  }

  userLogOut(): void {
    alert('user logout sucessfull');
  }

  userSave(userData: UserInfo): Observable<string> {
    let registerDate: Date = new Date(userData.registerDate);
    let dateFormat: string = this.datePipe.transform(
      registerDate,
      'yyyy-MM-dd'
    ) as string;
    userData.registerDate = dateFormat;
    userData.userCategory = 'employee';
    userData.password = 'example12';
    // console.log(this.http.post<UserInfo>(`${this.baseUrl}/register`, userData));
    return this.http.post<string>(`${this.baseUrl}/register`, userData);
  }

  deleteUser(id: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/employee/${id}`);
  }
  editUser(id: string, userData: UserInfo): Observable<string> {
    let registerDate: Date = new Date(userData.registerDate);
    let dateFormat: string = this.datePipe.transform(
      registerDate,
      'yyyy-MM-dd'
    ) as string;
    userData.registerDate = dateFormat;
    return this.http.patch<string>(`${this.baseUrl}/employee/${id}`, userData);
  }
}
