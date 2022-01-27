import { NgModule } from '@angular/core';
import { SharedModule, UiKitModule } from 'shared';
import { ToggleTaskModule } from 'features/toggle-task';
import { TaskModule } from 'entities/task';

import { TaskDetailsRoutingModule } from './task-details-routing.module';
import { TaskDetailsPage } from './task-details.page';

@NgModule({
  declarations: [TaskDetailsPage],
  imports: [
    TaskDetailsRoutingModule,
    SharedModule,
    UiKitModule,
    TaskModule,
    ToggleTaskModule,
  ],
})
export class TaskDetailsModule {}
