import { NgModule } from '@angular/core';
import { TasksFilterModule } from 'features/tasks-filter';
import { ToggleTaskModule } from 'features/toggle-task';
import { TaskModule } from 'entities/task';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

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
