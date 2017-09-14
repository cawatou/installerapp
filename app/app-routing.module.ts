import { NgModule }                               from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { AuthComponent }                          from './auth.component';
import { ContractsComponent }                     from './contracts.component';
import { HistoryComponent }                       from './history.component';
import { HistoryDetailComponent }                 from './history-detail.component';
import { KnowledgeComponent }                     from './knowledge.component';
import { KnowledgeDetailComponent }               from './knowledge-detail.component';
import { MainComponent }                          from './main.component';
import { SchedulerComponent }                     from './scheduler.component';
import { NotfoundComponent }                      from './notfound.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login',  component: AuthComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'history/:id', component: HistoryDetailComponent },
  { path: 'knowledge',  component: KnowledgeComponent },
  { path: 'knowledge/:id', component: KnowledgeDetailComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: '**',  component: NotfoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
