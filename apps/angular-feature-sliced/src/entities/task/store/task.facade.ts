import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TaskActions from './task.actions';
import * as TaskSelectors from './task.selectors';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  loaded$ = this.store.pipe(select(TaskSelectors.getTaskLoaded));
  allTask$ = this.store.pipe(select(TaskSelectors.getAllTask));
  selectedTask$ = this.store.pipe(select(TaskSelectors.getSelected));

  constructor(private readonly store: Store) {}

  loadTasks(): void {
    this.store.dispatch(TaskActions.loadAllTasks());
  }
}
