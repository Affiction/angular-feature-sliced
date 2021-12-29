import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { typicodeApi } from 'shared/api';

import * as TaskActions from './task.actions';
import * as TaskFeature from './task.reducer';

@Injectable()
export class TaskEffects {
  loadAllTasks$ = createEffect(() =>
    this.dataPersistence.fetch(TaskActions.loadAllTasks, {
      run: () => {
        return this.typicodeApi
          .getTasksList()
          .pipe(map((task) => TaskActions.loadTasksSuccess({ task })));
      },
      onError: (_, error) => {
        console.error('Error', error);
        return TaskActions.loadTasksFailure({ error });
      },
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<TaskFeature.TaskPartialState>,
    private readonly typicodeApi: typicodeApi.TypicodeService
  ) {}
}
