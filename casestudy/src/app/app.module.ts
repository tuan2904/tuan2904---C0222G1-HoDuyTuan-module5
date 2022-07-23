import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FacilityComponent } from './facility/facility.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ContailComponent } from './contail/contail.component';
import { ContailListComponent } from './contail-list/contail-list.component';

const router : Routes = [
  {path: 'list',component:FacilityComponent},
  {path:'',component:HomeComponent},
  {path: 'listCustomer',component:CustomerComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FacilityComponent,
    HomeComponent,
    CustomerComponent,
    EditcustomerComponent,
    CreatecustomerComponent,
    ContailComponent,
    ContailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

