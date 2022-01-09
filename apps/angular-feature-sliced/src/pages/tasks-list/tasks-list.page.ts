import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskFacade } from 'entities/task';
import { Task } from 'shared/api';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage implements OnInit {
  constructor(public readonly taskFacade: TaskFacade) {}

  ngOnInit() {
    this.taskFacade.loadTasks();
  }

  taskTrackBy(_: number, task: Task): number {
    return task.id;
  }
}
