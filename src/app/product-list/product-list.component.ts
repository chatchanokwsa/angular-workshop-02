import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  seeDetail: Product;
  filterData = '';

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    //
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

  onRatingClicked(message: string): void {
    alert(message);
  }
  moreDetail(product: Product): void {
    console.log('See more detail');
    this.seeDetail = product;
  }
}
