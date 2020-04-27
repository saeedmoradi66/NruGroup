import { Injectable } from '@angular/core';
import { NewsModel } from './NewsModel';
import { Observable } from 'rxjs';
[Injectable];
export class ShareData {
  constructor() {}
  static MyNewsList: NewsModel[];
  static DomainName = 'http://api.nrugroup.ir/';
}
