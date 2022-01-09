import { Pipe, PipeTransform } from '@angular/core';
import type { Task } from 'shared/api';

type Status = 'CLOSED' | 'OPENED';

@Pipe({ name: 'taskStatus' })
export class TaskStatusPipe implements PipeTransform {
  transform(task: Task): Status {
    return task.completed ? 'CLOSED' : 'OPENED';
  }
}
