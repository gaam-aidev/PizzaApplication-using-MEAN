import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaui';

  pizzaNu: number | null = null;

  constructor(private cart: CartService) {}

  get cartSize(): number{
    return this.cart.cartsize() || 0;
  }


}
