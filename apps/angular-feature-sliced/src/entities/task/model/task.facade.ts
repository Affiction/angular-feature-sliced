import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TaskActions from './task.actions';
import { QueryConfig } from './task.models';
import * as TaskSelectors from './task.selectors';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  loaded$ = this.store.pipe(select(TaskSelectors.getTaskLoaded));
  allTask$ = this.store.pipe(select(TaskSelectors.getAllTask));
  selectedTask$ = this.store.pipe(select(TaskSelectors.getSelected));
  filteredTasks$ = this.store.pipe(select(TaskSelectors.getFilteredTasks));

  constructor(private readonly store: Store) {}

  loadTasks(): void {
    this.store.dispatch(TaskActions.loadAllTasks());
  }

  filterTasks(config: QueryConfig): void {
    console.log('config:', config);
    this.store.dispatch(TaskActions.filterTasks({ config }));
  }
}
