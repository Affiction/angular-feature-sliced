import { NgModule } from '@angular/core';
import { UiKitModule, SharedModule } from 'shared';

import { TasksFilterComponent } from './components';
import { ConfigService } from './config.service';

const EXPORT_COMPONENTS = [TasksFilterComponent];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, UiKitModule],
  exports: EXPORT_COMPONENTS,
  providers: [ConfigService],
})
export class TasksFilterModule {}
