import { NgModule } from '@angular/core';
import { UiKitModule, SharedModule } from 'shared';

import { TaskCardComponent, TaskRowComponent } from './components';

@NgModule({
  declarations: [TaskCardComponent, TaskRowComponent],
  imports: [SharedModule, UiKitModule],
  exports: [TaskCardComponent, TaskRowComponent],
})
export class TaskModule {}
