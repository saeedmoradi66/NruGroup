import { ShareData } from './../../Models/ShareData';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/Models/NewsModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: string;
  NewsTopList: NewsModel[] = ShareData.MyNewsList;
  newsModel: NewsModel;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id != '' && this.id != null) {
        this.GetNewsByID(this.id);
      }
    });
  }

  GetNewsByID(id) {
    this.newsService.getByID(id).subscribe(
      (result: NewsModel) => {
        this.newsModel = result;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
