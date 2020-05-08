import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from '../_services/productcategory.service';
import { ProductCategoryModel } from '../Models/ProductCategoryModel';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  constructor(private categoryService: ProductcategoryService) {}

  categoryList: ProductCategoryModel[];
  showCategory = false;
  ngOnInit(): void {
    this.GetCategory();
  }

  GetCategory() {
    this.showCategory = true;
    this.categoryService.get().subscribe(
      (result) => {
        console.log(result);
        this.categoryList = result.sort();
        this.showCategory = false;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
