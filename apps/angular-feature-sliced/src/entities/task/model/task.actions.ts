import { createAction, props } from '@ngrx/store';
import type { Task } from 'shared/api';
import { QueryConfig } from './task.models';

export const loadAllTasks = createAction('[Task/API] Load All Tasks');
export const loadTasksSuccess = createAction(
  '[Task/API] Load All Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task/API] Load All Tasks Failure',
  props<{ error: unknown }>()
);

export const filterTasks = createAction(
  '[Task] Filter Tasks',
  props<{ queryConfig: QueryConfig }>()
);

export const toggleTask = createAction(
  '[Task] Toggle Task',
  props<{ task: Task }>()
);

export const loadTask = createAction(
  '[Task/API] Load Current Task',
  props<{ id: number | string }>()
);
