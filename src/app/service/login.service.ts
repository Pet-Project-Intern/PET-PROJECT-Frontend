import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { User } from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8084/user';
  // private baseUrl = 'http://127.0.0.1:4759/user';
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  userAdd(userData:User): Observable<string>{
    userData.department = '';
    userData.registerDate = '';
    userData.userCategory = 'admin';
    return this.http.post<string>(`${this.baseUrl}/register`, userData);
  }
}
