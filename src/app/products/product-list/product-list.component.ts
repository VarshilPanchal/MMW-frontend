import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productServices: ProductService) { }

  ngOnInit(): void {
    this.getProductlist();
  }

  getProductlist() {
    return this.productServices.getProducts().subscribe(
      (response) => {
        this.products = response;
        console.log(response)
      });
  }

}
