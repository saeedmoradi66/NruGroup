import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from 'src/app/_services/productcategory.service';
import { ProductCategoryModel } from 'src/app/Models/ProductCategoryModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categoryList: ProductCategoryModel[];
  constructor(private categoryService: ProductcategoryService) {}

  ngOnInit(): void {
    this.GetProductCategory ();
  }

  GetProductCategory() {
    this.categoryService.get().subscribe(
      (result) => {
        this.categoryList = result;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
