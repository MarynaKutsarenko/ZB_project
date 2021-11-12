import { Component, OnInit } from '@angular/core';
import { Filter } from '../../../interface/categories';
import { categories } from '../../../db/current-categories';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  
  public categories: Filter[] = categories;
  public item: Filter = {} as Filter;


  constructor() { }

  ngOnInit(): void {
  }

}
