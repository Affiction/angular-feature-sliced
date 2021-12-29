import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/modules';

import { TasksListPage } from './tasks-list.page';

const EXPORT_COMPONENTS = [TasksListPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule],
  exports: EXPORT_COMPONENTS,
  providers: [],
})
export class TaskListModule {}
