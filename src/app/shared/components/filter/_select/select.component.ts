import { Component, OnInit, Input } from '@angular/core';
import { Select } from '../../../../interface/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() option: Select = {} as Select;

  constructor() { }

  ngOnInit(): void {
  }


}
