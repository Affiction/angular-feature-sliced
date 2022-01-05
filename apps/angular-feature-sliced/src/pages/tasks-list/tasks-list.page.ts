import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { taskStore } from 'entities/task';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage implements OnInit {
  constructor(public readonly taskFacade: taskStore.TaskFacade) {}

  ngOnInit() {
    this.taskFacade.loadTasks();
  }
}
