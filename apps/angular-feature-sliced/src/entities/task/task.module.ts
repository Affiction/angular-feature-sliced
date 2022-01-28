import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TaskCardComponent, TaskRowComponent } from './components';
import { TaskStatusPipe } from './lib';

@NgModule({
  declarations: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
  imports: [SharedModule, UiKitModule],
  exports: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
})
export class TaskModule {}
