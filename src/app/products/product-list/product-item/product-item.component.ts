import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetail() {
    return this.router.navigate([this.product.id], {
      relativeTo: this.route,
      queryParams: { id: this.product.id, name: this.product.name },
      fragment: "allowedit: true"
    }
    )
    // [routerLink]="[index]" [queryParams]="{name:product.name}" routerLinkActive="active"
  }
}
