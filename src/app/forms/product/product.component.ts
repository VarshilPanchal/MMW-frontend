import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { FormGroup, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // newProduct:FormGroup;
  @ViewChild('productForm') productForm: NgForm;
  product: Product;
  editProduct: Product;
  name: string;
  id: number;
  editMode = false;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.product = new Product();
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.id = +params['id']) {
          this.editMode = true;
          console.log(params);
          this.getProduct(this.id)
        }
      }
    );

  }

  add(product) {

    if (this.editMode) {
      this.productService.editProduct(product).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['product/list']);
        },
        (error: Error) => {
          alert(error.message);
        });

    } else {
      this.productService.addProduct(product).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['product/list']);
        },
        (error: Error) => {
          alert(error.message);
        });
    }
  }

  getProduct(id) {
    if (this.editMode) {
      this.productService.getProduct(id).subscribe(
        (data) => {
          this.product = data;
        },
        (error: Error) => { console.log(error.message); }
      );
    }
  }

}

