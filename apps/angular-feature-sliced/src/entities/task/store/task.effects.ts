import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as TaskActions from './task.actions';
import * as TaskFeature from './task.reducer';

@Injectable()
export class TaskEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(TaskActions.init, {
      run: (
        action: ReturnType<typeof TaskActions.init>,
        state: TaskFeature.TaskPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return TaskActions.loadTaskSuccess({ task: [] });
      },
      onError: (action: ReturnType<typeof TaskActions.init>, error) => {
        console.error('Error', error);
        return TaskActions.loadTaskFailure({ error });
      },
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<TaskFeature.TaskPartialState>
  ) {}
}
