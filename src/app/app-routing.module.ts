import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';


const routes: Routes = [
  {path: 'event/:id', component: EventDetailComponent},
  {path: 'event', component: EventListComponent},
  {path: 'eventCreation', component: EventCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
