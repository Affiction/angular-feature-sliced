import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskFacade } from 'entities/task';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage implements OnInit {
  constructor(
    public readonly taskFacade: TaskFacade,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.taskFacade.loadTasks();
  }

  openDetails(id: number): void {
    this.router.navigate(['/task-details', id]);
  }
}
