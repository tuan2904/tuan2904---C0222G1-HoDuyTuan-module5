import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FacilityComponent } from './facility/facility.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ContailListComponent } from './contail/contail-list/contail-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateContailComponent } from './contail/create-contail/create-contail.component';
import { EditContailComponent } from './contail/edit-contail/edit-contail.component';

const router : Routes = [
  {path: 'list',component:FacilityComponent},
  {path:'',component:HomeComponent},
  {path: 'listCustomer',component:CustomerComponent},
  {path: 'listContract',component:ContailListComponent},
  {path:'editContract',component:EditContailComponent}
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
    ContailListComponent,
    EmployeeComponent,
    CreateContailComponent,
    EditContailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

