import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product;
  id: number;
  name: string;

  constructor(private productServices: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        console.log(this.id)
      })
    this.route.queryParams.subscribe(
      (qparams: Params) => {
        this.name = qparams["name"];
        console.log(this.name)
      })

    this.getProductDetail(this.id);
  }

  getProductDetail(id) {
    this.productServices.getProduct(id).subscribe(
      (response) => {
        this.productDetail = response;
        console.log(response);
      })
  }

  onEditProduct(id: number) {
    console.log(id);
    this.router.navigate(['product/edit', id],);
    // { relativeTo: this.route }
  }

  onDeleteProduct(id) {
    this.productServices.deleteProduct(id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['product/list']);
      },
      (error:Error) => {
        console.log(error.message);
      })

  }

}
