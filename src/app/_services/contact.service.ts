import { Injectable } from '@angular/core';
import { ContactUsModel } from '../Models/ContactUsModel';
import { ShareData } from '../Models/ShareData';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  Save(model: ContactUsModel) {
    return this.http
      .post(ShareData.DomainName + 'api/Contact/', model)
      .pipe(map((result) => result));
  }
}
