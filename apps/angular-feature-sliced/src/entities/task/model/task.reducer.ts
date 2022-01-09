import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Task } from 'shared/api';

import * as TaskActions from './task.actions';
import { QueryConfig } from './task.models';

export const TASK_FEATURE_KEY = 'task';

export interface State extends EntityState<Task> {
  selectedId?: string | number;
  loading: boolean;
  error?: unknown;
  queryConfig?: QueryConfig;
}

export interface TaskPartialState {
  readonly [TASK_FEATURE_KEY]: State;
}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = taskAdapter.getInitialState({
  loading: false,
});

const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadAllTasks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) =>
    taskAdapter.setAll(tasks, { ...state, loading: false })
  ),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, error })),

  on(TaskActions.filterTasks, (state, { queryConfig }) => ({
    ...state,
    queryConfig,
  })),

  on(TaskActions.toggleTask, (state, { task }) => {
    return taskAdapter.updateOne(
      {
        id: task.id,
        changes: {
          ...task,
          completed: !task.completed,
        },
      },
      state
    );
  })
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}
