import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailsPage } from './task-details.page';

const routes: Routes = [
  {
    path: '',
    component: TaskDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskDetailsRoutingModule {}
