import { NgModule } from '@angular/core';
import { MaterialModule, SharedModule } from 'shared';

import { TaskCardComponent, TaskRowComponent } from './components';

const EXPORT_COMPONENTS = [TaskCardComponent, TaskRowComponent];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, MaterialModule],
  exports: [...EXPORT_COMPONENTS],
})
export class TaskModule {}
