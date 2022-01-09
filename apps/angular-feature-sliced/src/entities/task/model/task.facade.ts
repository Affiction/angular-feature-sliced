import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'shared/api';

import * as TaskActions from './task.actions';
import { QueryConfig } from './task.models';
import * as TaskSelectors from './task.selectors';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  loaded$ = this.store.select(TaskSelectors.getTaskLoaded);
  loading$ = this.store.select(TaskSelectors.getTaskLoading);
  allTask$ = this.store.select(TaskSelectors.getAllTask);
  selectedTask$ = this.store.select(TaskSelectors.getSelected);
  filteredTasks$ = this.store.select(TaskSelectors.getFilteredTasks);

  constructor(private readonly store: Store) {}

  loadTasks(): void {
    this.store.dispatch(TaskActions.loadAllTasks());
  }

  filterTasks(queryConfig: QueryConfig): void {
    this.store.dispatch(TaskActions.filterTasks({ queryConfig }));
  }

  toggleTask(task: Task) {
    this.store.dispatch(TaskActions.toggleTask({ task }));
  }

  loadTask(id: number | string) {
    this.store.dispatch(TaskActions.loadTask({ id }));
  }
}
