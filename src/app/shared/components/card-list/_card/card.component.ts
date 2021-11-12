import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../interface/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card = {} as Card;

  constructor() { }

  ngOnInit(): void {
  }

}
