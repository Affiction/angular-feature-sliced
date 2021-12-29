import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TaskActions from './task.actions';
import { Task } from 'shared/api';

export const TASK_FEATURE_KEY = 'task';

export interface State extends EntityState<Task> {
  selectedId?: string | number; // which Task record has been selected
  loaded: boolean; // has the Task list been loaded
  error?: unknown; // last known error (if any)
}

export interface TaskPartialState {
  readonly [TASK_FEATURE_KEY]: State;
}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = taskAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const taskReducer = createReducer(
  initialState,
  on(TaskActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(TaskActions.loadTaskSuccess, (state, { task }) =>
    taskAdapter.setAll(task, { ...state, loaded: true })
  ),
  on(TaskActions.loadTaskFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
