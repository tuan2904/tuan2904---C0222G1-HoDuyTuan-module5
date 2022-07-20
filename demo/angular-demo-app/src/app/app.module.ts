import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StockStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
