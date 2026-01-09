import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = [];
  ingredients: any = [];
  totalIngredientPrice: number = 0;

  constructor() { }

  addToCart(items: any){
    const existingItem = this.cart.find((p:{name:string})=> p.name===items.name);
    if(existingItem){
      return;
    }else{
      this.cart.push({...items, quantity:1});
    }
  }

  addToIngredient(item: any){
    this.ingredients.push(item);
  }
  
  removeFromCart(items: any){
    this.cart = this.cart.filter((p:{name:string}) => p.name !== items.name);
  }
  
  removeFromIngredient(items: any){
    this.ingredients = this.ingredients.filter((p:{tname:string})=> p.tname !==items.tname);
  }

  totalIngredient(){
    this.totalIngredientPrice = this.ingredients.reduce((total: string, item: any)=> total + Number.parseInt(item.price), 0);
    return this.totalIngredientPrice;
  }

  changeQuantity(type: string, item: any): any{
    const pizza = this.cart.find((p:{name:string})=> p.name===item.name);
    if(pizza){
      if(type==='up'){
        pizza.quantity += 1;
      }else if(type==='down'){
        pizza.quantity -= 1;
        if(pizza.quantity<=0){
          this.removeFromCart(pizza);
        }
      }
    }
    return this.cart
  }

  getTotalprice(): number{
    return this.cart.reduce((total: string, item: any) => total + (item.price * item.quantity), 0);
  }

  clearall():void{
    this.cart = [];
    this.ingredients = [];
    this.totalIngredientPrice = 0
  }

  cartsize(): number{
    return this.cart.length;
  }

}
