import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../collections';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  @Input() collections: Collection[];
  @Output() collectionSelected = new EventEmitter<Collection>();
  constructor() { }

  ngOnInit() {
  }

  select(collection: Collection) {
    this.collectionSelected.emit(collection);
  }
}
