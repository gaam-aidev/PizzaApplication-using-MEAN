import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getIngredients(){
    return this.http.get(`${this.url}/api/ingredients`);
  }

  getPizzas(){
    return this.http.get(`${this.url}/api/pizzas`);
  }
}
