import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';
import { UiKitModule } from 'shared/ui';

import { TasksFilterComponent } from './components';
import { ConfigService } from './model';

const EXPORT_COMPONENTS = [TasksFilterComponent];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, UiKitModule],
  exports: EXPORT_COMPONENTS,
  providers: [ConfigService],
})
export class TasksFilterModule {}
