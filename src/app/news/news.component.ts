
import { NewsModel } from './../Models/NewsModel';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Pager } from '../Models/Pager';
import { ShareData } from '../Models/ShareData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  id: number;
  NewsList: Array<NewsModel> = null;
  NewsTopList: Array<NewsModel> = null;
  newsModel: NewsModel;
  pager: Pager;
  totalRow = 0;
  pageNumberList: Array<number> = [];
  constructor(private newsService: NewsService, private router: ActivatedRoute) {


    this.GetNewsCount();

    this.NewsTopList = ShareData.MyNewsList;
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const page = this.router.snapshot.paramMap.get('id');
      // tslint:disable-next-line:use-isnan
      if (page == null) {
        this.id = 1;
      } else {
        // tslint:disable-next-line: radix
        this.id = parseInt(page);
      }
      this.GetNewsAll(this.id);

    });
  }

  GetNewsAll(page?: number) {
    const pageSize = 2;
    const pageNumber = page;

    this.newsService.getAll(pageSize, pageNumber).subscribe(
      (result: any) => {
        this.NewsList = result;
        let p = 0;
        this.pageNumberList = [];
        this.pager = new Pager(this.totalRow, pageNumber, pageSize);
        for (p = this.pager.startPage; p <= this.pager.endPage; p++) {
          this.pageNumberList.push(p);
        }

      },
      error => {
        console.log(error.message);
      }
    );
  }



  GetNewsCount() {

    this.newsService.getNewsCount().subscribe(
      (result: number) => {

        this.totalRow = result;


      },
      error => {
        console.log(error.message);
      }
    );
  }
}
