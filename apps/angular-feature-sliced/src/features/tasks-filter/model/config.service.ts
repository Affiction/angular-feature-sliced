import { Injectable } from '@angular/core';
import { taskModel } from 'entities/task';

export type Filter = {
  id: number;
  title: string;
  config: taskModel.QueryConfig;
};

export const DEFAULT_FILTER = 1;

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly defaultFilter = DEFAULT_FILTER;
  readonly filters: Record<number, Filter> = {
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
  readonly filtersList = Object.values(this.filters);

  getFilterById(id: number): Filter {
    return this.filters[id];
  }
}
