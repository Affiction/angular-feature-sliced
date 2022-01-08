import { InjectionToken, Type } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { taskModel } from 'entities/task';
import { environment } from 'environments/environment';

/**
 * Every reducer module's default export is the reducer function it¬self. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: fromRouter.RouterState;
  [taskModel.TASK_FEATURE_KEY]: taskModel.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    [taskModel.TASK_FEATURE_KEY]: taskModel.reducer,
  }),
});

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const rootEffects: Type<unknown>[] = [taskModel.TaskEffects];
