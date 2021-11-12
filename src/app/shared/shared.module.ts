import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectComponent } from './components/filter/_select/select.component';
import { FilterListComponent } from './components/filter/filter-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card-list/_card/card.component';
import { CategoriesListComponent } from '../shared/components/categories-list/categories-list.component';
import { ItemComponent } from './components/categories-list/item/item.component';


@NgModule({
  declarations: [
    SelectComponent,
    FilterListComponent,
    CardListComponent,
    CardComponent,
    CategoriesListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    FilterListComponent,
    CardListComponent,
    CategoriesListComponent
  ]
})
export class SharedModule { }
