import { Injectable } from '@angular/core';
import { NewsModel } from './NewsModel';
[Injectable];
export class ShareData {
  constructor() {}
  static MyNewsList: NewsModel[];
  static DomainName = 'https://api.nrugroup.ir/';
}
