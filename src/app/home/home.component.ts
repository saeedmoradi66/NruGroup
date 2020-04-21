import { ShareData } from './../Models/ShareData';
import { SlidersService } from './../_services/sliders.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { NewsModel } from '../Models/NewsModel';
import { SlidersModel } from '../Models/SlidersModel';
import { takeLast, take, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductcategoryService } from '../_services/productcategory.service';
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
  constructor(
    private newsService: NewsService,
    private sliderService: SlidersService

  ) {}

  ngOnInit(): void {
    this.GetAllNews();
    this.GetSliders();

  }

  GetAllNews() {
    this.newsService.getData().subscribe(
      (result) => {
        this.NewsList = result;
        ShareData.MyNewsList = result;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  GetSliders() {
    this.sliderService.getData().subscribe(
      (result) => {
        this.sliderList = result;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }


}
