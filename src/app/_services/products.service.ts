import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShareData } from '../Models/ShareData';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private readonly http: HttpClient) {}

  getByProductCategory(id: number): Observable<any> {
    return this.http
      .get(
        ShareData.DomainName +
          'api/Products/GetProductsByCategory?id=' +
          id
      )
      .pipe(map((result) => result));
  }
}
