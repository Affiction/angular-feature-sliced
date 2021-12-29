import { createAction, props } from '@ngrx/store';
import { Task } from 'shared/api';

export const init = createAction('[Task Page] Init');

export const loadTaskSuccess = createAction(
  '[Task/API] Load Task Success',
  props<{ task: Task[] }>()
);

export const loadTaskFailure = createAction(
  '[Task/API] Load Task Failure',
  props<{ error: unknown }>()
);
