import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {BusListComponent} from './bus/bus-list/bus-list.component';
import {BusCreateComponent} from './bus/bus-create/bus-create.component';
import {StudentComponent} from './student/student.component';


const routes: Routes = [
  {path: 'list', component: StudentComponent},
  {path: '', component: HeaderComponent},
  {path: 'add', component: BusCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
