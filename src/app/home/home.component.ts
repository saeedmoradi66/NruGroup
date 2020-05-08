import { ShareData } from './../Models/ShareData';
import { SlidersService } from './../_services/sliders.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { NewsModel } from '../Models/NewsModel';
import { SlidersModel } from '../Models/SlidersModel';
import { ProductCategoryModel } from '../Models/ProductCategoryModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  NewsList: NewsModel[];
  sliderList: SlidersModel[];
  categoryList: ProductCategoryModel[];
  showSliders = false;
  showNews = false;
  constructor(
    private newsService: NewsService,
    private sliderService: SlidersService
  ) {}

  ngOnInit(): void {
    this.GetAllNews();
    this.GetSliders();
  }

  GetAllNews() {
    this.showNews = true;
    this.newsService.getData().subscribe(
      (result) => {
        this.NewsList = result;
        ShareData.MyNewsList = result;
        this.showNews = false;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  GetSliders() {
    this.showSliders = true;
    this.sliderService.getData().subscribe(
      (result) => {
        this.sliderList = result;
        this.showSliders = false;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
