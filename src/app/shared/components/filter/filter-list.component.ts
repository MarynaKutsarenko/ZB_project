import { Component, OnInit } from '@angular/core';

import { filters } from '../../../db/current-filters';
import { Select } from '../../../interface/select';


@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  
  public select: Select = {} as Select;
  public options: Select[] = filters;


  constructor() { }

  ngOnInit(): void {
  }

}
