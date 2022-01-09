import { NgModule } from '@angular/core';
import { TaskModule } from 'entities/task';
import { TasksFilterModule } from 'features/tasks-filter';
import { ToggleTaskModule } from 'features/toggle-task';
import { SharedModule, UiKitModule } from 'shared';

import { TasksListPage } from './tasks-list.page';

@NgModule({
  declarations: [TasksListPage],
  imports: [
    SharedModule,
    UiKitModule,
    TaskModule,
    TasksFilterModule,
    ToggleTaskModule,
  ],
  exports: [TasksListPage],
})
export class TaskListModule {}
