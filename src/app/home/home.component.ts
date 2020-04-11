import { ShareData } from './../Models/ShareData';
import { SlidersService } from './../_services/sliders.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { NewsModel } from '../Models/NewsModel';
import { SlidersModel } from '../Models/SlidersModel';
import { takeLast, take, first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NewsList: Array<NewsModel>;
  sliderList: Array<SlidersModel>;
  constructor(private newsService: NewsService, private sliderService: SlidersService) {
    this.GetAllNews();
    this.GetSliders();

  }

  ngOnInit(): void {
  }

  GetAllNews() {
    this.newsService.getData().subscribe(
      (result: Array<NewsModel>) => {

        this.NewsList = result;
        ShareData.MyNewsList = result;

      },
      error => {

        console.log(error.message);
      }
    );
  }

  GetSliders() {
    this.sliderService.getData().subscribe(
      (result: Array<SlidersModel>) => {

        this.sliderList = result;


      },
      error => {

        console.log(error.message);
      }
    );
  }
}
