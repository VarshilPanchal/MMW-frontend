import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
