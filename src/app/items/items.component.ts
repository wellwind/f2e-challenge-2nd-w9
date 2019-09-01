import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../collections';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() items: Item[];
  @Output() itemSelected = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if ((this.items || []).length > 0) {
      this.select(this.items[0]);
    }
  }

  select(item: Item) {
    console.log(item);
    this.itemSelected.emit(item);
  }
}
