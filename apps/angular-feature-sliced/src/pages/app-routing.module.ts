import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage, NotFoundPageModule } from 'pages/not-found';
import { TaskListModule, TasksListPage } from 'pages/tasks-list';

const routes: Routes = [
  { path: '', redirectTo: '/tasks-list', pathMatch: 'full' },
  { path: 'tasks-list', component: TasksListPage },
  {
    path: 'task-details/:id',
    loadChildren: () =>
      import('./task-details/task-details-routing.module').then(
        (m) => m.TaskDetailsRoutingModule
      ),
  },
  { path: 'not-found', component: NotFoundPage },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [NotFoundPageModule, TaskListModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
