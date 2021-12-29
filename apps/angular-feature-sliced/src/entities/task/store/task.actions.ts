import { createAction, props } from '@ngrx/store';
import { Task } from 'shared/api';

export const loadAllTasks = createAction('[Task/API] Load All Tasks');
export const loadTasksSuccess = createAction(
  '[Task/API] Load All Tasks Success',
  props<{ task: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task/API] Load All Tasks Failure',
  props<{ error: unknown }>()
);
