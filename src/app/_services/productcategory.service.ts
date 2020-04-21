import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShareData } from '../Models/ShareData';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductcategoryService {
  constructor(private readonly http: HttpClient) {}

  get(): Observable<any> {
    return this.http
      .get(ShareData.DomainName + 'api/ProductCategory')
      .pipe(map((result) => result));
  }
}
