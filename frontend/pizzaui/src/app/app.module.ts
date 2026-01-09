import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { TypecolorPipe } from './typecolor.pipe';
import { PizzacardComponent } from './pizzacard/pizzacard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    CustomComponent,
    CartComponent,
    TypecolorPipe,
    PizzacardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
