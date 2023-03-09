import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = `${environment.baseUrl}/orders`;

  constructor(private httpClient: HttpClient) { }

  findOrders(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}`, {headers: environment.headers,
      withCredentials: environment.withCredentials});
  }

  findProducts(orderId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${orderId}`, {headers: environment.headers,
      withCredentials: environment.withCredentials});
  }

  addOrder(): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/add`, null, {headers: environment.headers,
      withCredentials: environment.withCredentials});
  }
}
