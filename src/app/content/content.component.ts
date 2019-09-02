import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../collections';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}

  save(content: string) {
    console.log(JSON.stringify(content));
  }
}
