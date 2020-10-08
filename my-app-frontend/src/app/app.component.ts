import { Component } from '@angular/core';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  //items = ITEMS;
  items: Item[];
  error: any;

  constructor ( private api: ApiService ) { }

  ngOnInit() {
    this.api.getItems().subscribe(
      (items: Item[]) => this.items = items,
      (error: any) => this.error = error
    );
  }
}
