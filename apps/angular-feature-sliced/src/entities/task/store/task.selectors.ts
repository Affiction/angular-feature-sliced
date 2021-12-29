import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASK_FEATURE_KEY, State, taskAdapter } from './task.reducer';

// Lookup the 'Task' feature state managed by NgRx
export const getTaskState = createFeatureSelector<State>(TASK_FEATURE_KEY);

const { selectAll, selectEntities } = taskAdapter.getSelectors();

export const getTaskLoaded = createSelector(
  getTaskState,
  (state: State) => state.loaded
);

export const getTaskError = createSelector(
  getTaskState,
  (state: State) => state.error
);

export const getAllTask = createSelector(getTaskState, (state: State) =>
  selectAll(state)
);

export const getTaskEntities = createSelector(getTaskState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getTaskState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTaskEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);