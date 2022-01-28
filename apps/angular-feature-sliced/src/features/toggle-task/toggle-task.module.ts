import { NgModule } from '@angular/core';
import { TaskModule } from 'entities/task';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { ToggleTaskComponent } from './components';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule, TaskModule],
  exports: [ToggleTaskComponent],
})
export class ToggleTaskModule {}
