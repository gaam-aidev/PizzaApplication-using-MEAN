import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  pizzaItems: any = [];

  constructor(private pizzaservice: ItemsService, private cartService: CartService) { }

  addCart(items: any){
    this.cartService.addToCart(items);  
  }

  removeCart(items: any){
    this.cartService.removeFromCart(items);  
  }

  ngOnInit():void{
    this.pizzaservice.getPizzas().subscribe({
      next: (data)=>{
        this.pizzaItems = data;
      },
      error: (err)=>{
        console.log('Error fetching pizza items:', err);
      }
    })
  } 

  isItemInCart(item: any): boolean{
    return this.cartService.cart.find((p:{name:string})=> p.name===item.name);
  }

}
