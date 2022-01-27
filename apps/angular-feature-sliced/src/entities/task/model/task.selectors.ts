import { createFeatureSelector, createSelector } from '@ngrx/store';
import { routerModel } from 'shared/lib';
import { TASK_FEATURE_KEY, State, taskAdapter } from './task.reducer';

export const getTaskState = createFeatureSelector<State>(TASK_FEATURE_KEY);

const { selectAll, selectEntities } = taskAdapter.getSelectors();

export const getTaskLoading = createSelector(
  getTaskState,
  (state: State) => state.loading
);

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

export const getSelected = createSelector(
  getTaskEntities,
  routerModel.selectRouteParam('id'),
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const getQueryConfig = createSelector(
  getTaskState,
  (state: State) => state.queryConfig
);

export const getFilteredTasks = createSelector(
  getAllTask,
  getQueryConfig,
  (tasks, config) =>
    tasks.filter(
      (task) =>
        config?.completed === undefined || task.completed === config.completed
    )
);
