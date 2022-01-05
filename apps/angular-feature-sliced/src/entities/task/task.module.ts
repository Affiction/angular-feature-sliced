import { NgModule } from '@angular/core';
import { MaterialModule, SharedModule } from 'shared/modules';

import { TaskCardComponent, TaskRowComponent } from './components';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import * as fromTask from './store/task.reducer';
// import { TaskEffects } from './store/task.effects';
// import { TaskFacade } from './store/task.facade';

const EXPORT_COMPONENTS = [TaskCardComponent, TaskRowComponent];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [
    SharedModule,
    MaterialModule,
    // StoreModule.forFeature(fromTask.TASK_FEATURE_KEY, fromTask.reducer),
    // EffectsModule.forFeature([TaskEffects]),
  ],
  exports: [...EXPORT_COMPONENTS],
})
export class TaskModule {}
