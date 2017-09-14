import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppRoutingModule }         from './app-routing.module';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

import { AppComponent }             from './app.component';
import { AuthComponent }            from './auth.component';
import { ContractsComponent }       from './contracts.component';
import { HistoryComponent }         from './history.component';
import { HistoryDetailComponent }   from './history-detail.component';
import { KnowledgeComponent }       from './knowledge.component';
import { KnowledgeDetailComponent } from './knowledge-detail.component';
import { MainComponent }            from './main.component';
import { SchedulerComponent }       from './scheduler.component';
import { NotfoundComponent }        from './notfound.component';

import { ScriptService }            from './script.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    ContractsComponent,
    HistoryComponent,
    HistoryDetailComponent,
    KnowledgeComponent,
    KnowledgeDetailComponent,
    MainComponent,
    SchedulerComponent,
    NotfoundComponent
  ],
  providers: [ ScriptService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
