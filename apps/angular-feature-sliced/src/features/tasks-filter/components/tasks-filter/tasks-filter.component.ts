import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskFacade } from 'entities/task';

import { ConfigService } from '../../model';

@Component({
  selector: 'fs-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterComponent {
  constructor(
    public readonly configService: ConfigService,
    public readonly taskFacade: TaskFacade
  ) {}
}
