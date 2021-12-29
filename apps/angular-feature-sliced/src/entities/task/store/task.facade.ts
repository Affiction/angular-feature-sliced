import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as TaskActions from './task.actions';
import * as TaskFeature from './task.reducer';
import * as TaskSelectors from './task.selectors';

@Injectable()
export class TaskFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TaskSelectors.getTaskLoaded));
  allTask$ = this.store.pipe(select(TaskSelectors.getAllTask));
  selectedTask$ = this.store.pipe(select(TaskSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TaskActions.init());
  }
}
