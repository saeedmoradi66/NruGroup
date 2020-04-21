import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ShareData } from '../Models/ShareData';
import { SlidersModel } from '../Models/SlidersModel';

@Injectable({
  providedIn: 'root',
})
export class SlidersService {
  constructor(private readonly http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get(ShareData.DomainName + 'api/Sliders')
      .pipe(map((result) => result));
  }
}
