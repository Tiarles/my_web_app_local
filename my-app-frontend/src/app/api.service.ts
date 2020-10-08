import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiRoot = 'http://localhost:8000/';
  constructor( private http:HttpClient ) { }

  getItems() {
    return this.http.get(this.apiRoot.concat('items/item/'));
  }
}
