import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizzacard',
  templateUrl: './pizzacard.component.html',
  styleUrls: ['./pizzacard.component.css']
})
export class PizzacardComponent {

  @Input() pizzas: any;
  @Output() cartAction = new EventEmitter<{name: string, action: string}>();

  cartFlag: boolean = false;

  toggleCart(){
    this.cartFlag = !this.cartFlag;
    if(this.cartFlag){
      this.cartAction.emit({name: this.pizzas, action: 'add'});
    }else{
      this.cartAction.emit({name: this.pizzas, action: 'remove'});
    }

  }

}
