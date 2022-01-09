import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFacade } from 'entities/task';
import { filter, tap } from 'rxjs/operators';
import { Task } from 'shared/api';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage {
  loadTasks$ = this.taskFacade.filteredTasks$.pipe(
    filter((tasks) => tasks.length == 0),
    tap(() => {
      this.taskFacade.loadTasks();
    })
  );

  constructor(
    public readonly taskFacade: TaskFacade,
    public readonly router: Router
  ) {}

  trackByTaskId(id: number, task: Task) {
    return task.id;
  }
}
