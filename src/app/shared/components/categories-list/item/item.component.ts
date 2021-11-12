import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Filter } from '../../../../interface/categories';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Filter = {} as Filter; 

  @ViewChild ('navdrop') navdrop: ElementRef | undefined;; 

  constructor() { }

  public dropMenu() {
    this.navdrop?.nativeElement.classList.toggle('_visibility');
  }

  ngOnInit(): void {
  }

}
