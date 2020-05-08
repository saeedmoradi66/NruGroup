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
  showProducts = false;
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const page = this.router.snapshot.paramMap.get('id');
      if (page != null) {
        this.id = parseInt(page);
        this.GetProducts(this.id);
      }
    });
  }

  GetProducts(id: number) {
    this.showProducts = true;
    this.productService.getByProductCategory(id).subscribe(
      (result) => {
        console.log(result);
        this.productsList = result.sort();
        this.showProducts = false;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
