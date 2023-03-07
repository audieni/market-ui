import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${environment.baseUrl}/users`
  loggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const userInfo = {
      email: email,
      password: password
    };

    return this.httpClient.post<any>(`${this.url}/login`, JSON.stringify(userInfo),
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  logout(): void {
    this.httpClient.post(`${this.url}/logout`, null);
  }

  register(email: string, password: string, country: string): Observable<any> {
    const userInfo = {
      email: email,
      password: password,
      country: country
    }

    return this.httpClient.post<any>(`${this.url}/register`, JSON.stringify(userInfo),
      {headers: environment.headers});
  }

  me(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/me`,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
