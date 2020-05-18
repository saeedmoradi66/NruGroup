import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from '../_services/productdetails.service';
import { ProductDetailsModel } from '../Models/ProductDetailsModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private productDetailsService: ProductdetailsService
  ) { }
  id: number;
  productDetails: ProductDetailsModel = null;
  showProducts = false;
  ngOnInit(): void {
    this.router.params.subscribe(() => {
      const page = this.router.snapshot.paramMap.get('id');
      if (page != null) {
        this.id = parseInt(page);
        this.GetProductDetails(this.id);
      }
    });
  }

  
  GetProductDetails(id: number) {
    this.showProducts = true;
    this.productDetailsService.getByProductID(id).subscribe(
      (result) => {
        if (result != null) {
          this.productDetails = result;
        }


        this.showProducts = false;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
