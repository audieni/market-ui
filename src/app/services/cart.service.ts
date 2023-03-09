import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string = `${environment.baseUrl}/carts`;

  constructor(private httpClient: HttpClient) { }

  public findCart(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}`,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  public addProduct(productId: number, stock: number): Observable<any> {
    const productInfo = {
      productId: productId,
      stock: stock
    }

    return this.httpClient.post<any>(`${this.url}/add`, JSON.stringify(productInfo),
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
