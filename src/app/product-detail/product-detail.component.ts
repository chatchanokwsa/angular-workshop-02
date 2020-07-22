import { Product } from './../models/product';
import { Component, OnInit, Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
type Products = Product[];

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Products;
  product: Product;
  // products: Product[] = [];

  constructor(private route: ActivatedRoute, public service: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.service.getAllProduct().subscribe((products) => {
          this.product = products.filter((p) => p.code === params.get('id'))[0];
        });
      }
      // (this.product = this.products.filter(
      //   (p) => p.code === params.get('id')
      // )[0])
    );
  }
}
