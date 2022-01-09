import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'shared/api';

import * as TaskActions from './task.actions';
import { QueryConfig } from './task.models';
import * as TaskSelectors from './task.selectors';

@Injectable({ providedIn: 'root' })
export class TaskFacade {
  loaded$ = this.store.select(TaskSelectors.getTaskLoaded);
  allTask$ = this.store.select(TaskSelectors.getAllTask);
  selectedTask$ = this.store.select(TaskSelectors.getSelected);
  filteredTasks$ = this.store.select(TaskSelectors.getFilteredTasks);

  constructor(private readonly store: Store) {}

  loadTasks(): void {
    this.store.dispatch(TaskActions.loadAllTasks());
  }

  filterTasks(config: QueryConfig): void {
    this.store.dispatch(TaskActions.filterTasks({ config }));
  }

  toggleTask(task: Task) {
    console.log(task);
  }
}
