import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {ClassComponent} from './class/class.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SearchStudentComponent} from './student/search-student/search-student.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';
import {StudentCreateComponent} from './student/student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassComponent,
    HeaderComponent,
    SearchStudentComponent,
    StudentEditComponent,
    StudentCreateComponent,
    StudentCreateComponent
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
export class AppModule {
}
