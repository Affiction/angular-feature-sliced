import { NgModule } from '@angular/core';
import { TaskModule } from 'entities/task';
import { TasksFilterModule } from 'features/tasks-filter';
import { SharedModule, UiKitModule } from 'shared';

import { TasksListPage } from './tasks-list.page';

const EXPORT_COMPONENTS = [TasksListPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, UiKitModule, TaskModule, TasksFilterModule],
  exports: EXPORT_COMPONENTS,
})
export class TaskListModule {}
