import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TicketCreateComponent} from './ticket/ticket-create/ticket-create.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';


const routes: Routes = [
  {path: 'add', component: TicketCreateComponent},
  {path: '', component: TicketListComponent},
  // {path: 'add', component: TicketCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
