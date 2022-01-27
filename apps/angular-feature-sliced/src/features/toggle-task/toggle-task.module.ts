import { NgModule } from '@angular/core';
import { SharedModule, UiKitModule } from 'shared';
import { TaskModule } from 'entities/task';

import { ToggleTaskComponent } from './components';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule, TaskModule],
  exports: [ToggleTaskComponent],
})
export class ToggleTaskModule {}
