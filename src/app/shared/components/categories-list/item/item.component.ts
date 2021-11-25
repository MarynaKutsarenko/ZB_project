import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Filter } from '../../../../interface/categories';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public isActive: boolean = false;

  @Input() item: Filter = {} as Filter;
  
  @ViewChild('navdrop')navdrop!: ElementRef;

  constructor() { }

  public dropMenu() {
    this.isActive = !this.isActive;
    this.navdrop?.nativeElement.classList.toggle('_opened');
  }

  ngOnInit(): void {
  }

}
