import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = `${environment.baseUrl}/products`;

  constructor(private httpClient: HttpClient) { }

  findAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}`, 
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
