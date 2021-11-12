import { Component, OnInit } from '@angular/core';
import { Card } from '../../../interface/card';
import { cards } from '../../../db/current-cards';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards: Card[] = cards;
  public item: Card = {} as Card;


  constructor() { }

  ngOnInit(): void {
  }

}

