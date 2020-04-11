import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  constructor(private readonly http: HttpClient) { }

  getData() {

    return this.http.get('http://localhost:49766/api/Sliders').pipe(map(result => result));

  }
}
