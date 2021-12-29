import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import type { Task } from './models';
const BASE_URL = '/todos';

export type GetTasksListParams = {
  userId?: number;
  completed?: boolean;
};

export type GetTaskByIdParams = {
  taskId: number;
  [key: string]: any;
};

@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  constructor(private readonly http: HttpClient) {}

  getTasksList(params?: GetTasksListParams): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}${BASE_URL}`, {
      params,
    });
  }

  getTaskById({ taskId, ...params }: GetTaskByIdParams): Observable<Task> {
    return this.http.get<Task>(`${environment.apiUrl}${BASE_URL}/${taskId}`, {
      params,
    });
  }
}
