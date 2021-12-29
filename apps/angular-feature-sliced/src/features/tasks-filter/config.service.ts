import { Injectable } from '@angular/core';
import { taskStore } from 'entities/task';

export type Filter = {
  id: number;
  title: string;
  config: taskStore.QueryConfig;
};

export const filters: Record<number, Filter> = {
  1: {
    id: 1,
    title: 'All',
    config: {},
  },
  2: {
    id: 2,
    title: 'Opened',
    config: { completed: false },
  },
  3: {
    id: 3,
    title: 'Closed',
    config: { completed: true },
  },
};

export const DEFAULT_FILTER = 1;

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly defaultFilter = DEFAULT_FILTER;
  readonly filters = filters;
  readonly filtersList = Object.values(this.filters);

  getFilterById(id: number): Filter {
    return this.filters[id];
  }
}
