import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';
import { ConfirmDeleteEventComponent } from './components/modal/confirm-delete-event/confirm-delete-event.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    EventDetailComponent,
    EventListComponent,
    EventCardComponent,
    EventCreationComponent,
    ConfirmDeleteEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConfirmDeleteEventComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDeleteEventComponent ]
})
export class AppModule { }
