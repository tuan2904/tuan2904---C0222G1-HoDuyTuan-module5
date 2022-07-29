import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BusListComponent } from './bus/bus-list/bus-list.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BusDatComponent } from './bus/bus-dat/bus-dat.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassComponent,
    HeaderComponent,
    StudentCreateComponent,
    SearchStudentComponent,
    BusListComponent,
    BusCreateComponent,
    BusDatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
