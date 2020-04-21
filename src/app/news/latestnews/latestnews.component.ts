import { NewsModel } from 'src/app/Models/NewsModel';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css'],
})
export class LatestnewsComponent implements OnInit {
  @Input('newsList') public NewsList: NewsModel[];
  constructor() {}

  ngOnInit(): void {}
}
