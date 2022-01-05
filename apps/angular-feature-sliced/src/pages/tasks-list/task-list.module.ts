import { NgModule } from '@angular/core';
import { SharedModule, MaterialModule } from 'shared/modules';
import { TasksFilterModule } from 'features/tasks-filter';

import { TasksListPage } from './tasks-list.page';

const EXPORT_COMPONENTS = [TasksListPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, MaterialModule, TasksFilterModule],
  exports: EXPORT_COMPONENTS,
  providers: [],
})
export class TaskListModule {}
