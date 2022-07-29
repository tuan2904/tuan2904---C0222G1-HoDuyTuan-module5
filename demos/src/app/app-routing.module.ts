import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {StudentComponent} from './student/student.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';
import {StudentCreateComponent} from './student/student-create/student-create.component';


const routes: Routes = [
  {path: 'list', component: StudentComponent},
  {path: '', component: HeaderComponent},
  {path: 'edit/:id', component: StudentEditComponent},
  {path: 'add', component: StudentCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
