import { NgModule } from '@angular/core';
import { TaskModule } from 'entities/task';
import { SharedModule, UiKitModule } from 'shared';

import { ToggleTaskComponent } from './components';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule, TaskModule],
  exports: [ToggleTaskComponent],
  providers: [],
})
export class ToggleTaskModule {}
