import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  
  ingredients: any; 
  ingredientsChecked = [];
  total: number = 0;

  constructor( private items: ItemsService, private cart: CartService){}

  ngOnInit():void{
    this.loadIngredients();
  }

  loadIngredients(){
    this.items.getIngredients().subscribe({
      next: (data)=>{
        this.ingredients = data;
      },
      error: (err)=>{
        console.log('Error fetching ingredients:', err);
      }
    })
  }

  handleclick(e: Event, item: any):void{
    const isChecked = (e.target as HTMLInputElement).checked;
    const unChecked = !(e.target as HTMLInputElement).checked;
    if (isChecked){
      this.total += Number.parseInt(item.price);
      this.cart.addToIngredient(item);
    }else{
      this.total -= Number.parseInt(item.price);
      this.cart.removeFromIngredient(item);
    }
  }

  finalizeIngredients(){
    this.cart.totalIngredient();
  }

}
