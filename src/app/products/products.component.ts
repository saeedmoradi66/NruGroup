import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../_services/products.service';
import { Products } from '../Models/ProductsModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}
  id: number;
  productsList: Products[];
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const page = this.router.snapshot.paramMap.get('id');
      // tslint:disable-next-line:use-isnan
      if (page == null) {
        this.id = 1;
      } else {
        // tslint:disable-next-line: radix
        this.id = parseInt(page);
      }
    });
    this.GetProducts(this.id);
  }

  GetProducts(id: number) {
    this.productService.getByProductCategory(id).subscribe(
      (result) => {
        this.productsList = result;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
