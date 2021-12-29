import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TasksListPage } from './tasks-list.page';

const EXPORT_COMPONENTS = [TasksListPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [CommonModule],
  exports: EXPORT_COMPONENTS,
  providers: [],
})
export class TaskListModule {}
