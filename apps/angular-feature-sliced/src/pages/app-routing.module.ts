import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { NotFoundPage, NotFoundPageModule } from './404';
import { TasksListPage } from './tasks-list';

const routes: Routes = [
  { path: '', redirectTo: '/tasks-list', pathMatch: 'full' },
  { path: 'tasks-list', component: TasksListPage },
  {
    path: 'task-details',
    loadChildren: () =>
      import('./task-details/task-details-routing.module').then(
        (m) => m.TaskDetailsRoutingModule
      ),
  },
  { path: '404', component: NotFoundPage },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [NotFoundPageModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
