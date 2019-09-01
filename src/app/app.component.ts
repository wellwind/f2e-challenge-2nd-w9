import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collection, Item } from './collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collections$: Observable<Collection[]>;
  selectedCollection: Collection;
  selectedItem: Item;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.collections$ = this.httpClient
      .get<{ collections: Collection[] }>('/assets/data.json')
      .pipe(map(collections => collections.collections));

    this.collections$.subscribe(data => {
      this.selectedCollection = data[0];
    });
  }
}
