import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  mycart: any = [];
  totalprice: number | null = null;
  ingredientPrize: number = 0;

  constructor(private cart: CartService, private router: Router){ }

  ngOnInit():void{
    this.loadcart();
  }

  loadcart(){
    this.mycart = this.cart.cart;
    this.updatetotal();
  }
  
  handleqty(type: string, item: any){
    this.mycart = this.cart.changeQuantity(type, item)
    this.updatetotal();
  }
  
  updatetotal(){
    this.totalprice = this.cart.getTotalprice();
    this.ingredientPrize = this.cart.totalIngredient();
  }

  onclear():void{
    this.cart.clearall();
    this.loadcart();
  }

  onpay():void{
    if( this.mycart.length === 0 && this.ingredientPrize === 0 && this.ingredientPrize === null){
      window.alert('You have no item in cart for purchase, Please Select some.');
    }else{
      window.alert('Your pizza/ingredients are on way to be delivered.');
    }
    this.router.navigate(['/']);
    this.onclear();
  }

}
