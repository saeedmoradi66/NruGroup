import { NewsModel } from 'src/app/Models/NewsModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {

  @Input('newsList') public NewsList: Array<NewsModel>;
  constructor() { }

  ngOnInit(): void {
  }

}
