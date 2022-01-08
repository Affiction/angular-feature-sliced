import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TaskActions from './task.actions';
import { Task } from 'shared/api';

export const TASK_FEATURE_KEY = 'task';

export interface State extends EntityState<Task> {
  selectedId?: string | number;
  loaded: boolean;
  error?: unknown;
  filteredTasks: Task[];
}

export interface TaskPartialState {
  readonly [TASK_FEATURE_KEY]: State;
}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = taskAdapter.getInitialState({
  loaded: false,
  filteredTasks: [],
});

const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadAllTasks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) =>
    taskAdapter.setAll(tasks, { ...state, loaded: true, filteredTasks: tasks })
  ),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
