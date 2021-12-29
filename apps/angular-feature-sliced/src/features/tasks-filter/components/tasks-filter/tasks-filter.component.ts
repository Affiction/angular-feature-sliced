import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigService } from '../../config.service';

import { taskStore } from 'entities/task';

@Component({
  selector: 'fs-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterComponent {
  constructor(
    public readonly configService: ConfigService,
    private readonly taskFacade: taskStore.TaskFacade
  ) {}

  ngOnInit(): void {
    this.taskFacade.loadTasks();
  }
}
