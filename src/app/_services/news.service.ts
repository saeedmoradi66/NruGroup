import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ShareData } from '../Models/ShareData';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private readonly http: HttpClient) {}

  getData() {
    return this.http
      .get(ShareData.DomainName + 'api/News/GetNewsTop')
      .pipe(map((result) => result));
  }

  getNewsCount() {
    return this.http
      .get(ShareData.DomainName + 'api/News/NewsCount')
      .pipe(map((result) => result));
  }
  getAll(pagesize: number, pageIndex: number) {
    return this.http
      .get(
        ShareData.DomainName +
          'api/News?pageSize=' +
          pagesize +
          '&pageIndex=' +
          pageIndex
      )
      .pipe(map((result) => result));
  }

  getByID(id: number) {
    return this.http
      .get(ShareData.DomainName + 'api/News/' + id)
      .pipe(map((result) => result));
  }
}
