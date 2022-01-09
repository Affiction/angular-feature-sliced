import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { TaskFacade } from 'entities/task';

@Component({
  selector: 'fs-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailsPage {
  constructor(
    public readonly taskFacade: TaskFacade,
    public readonly location: Location
  ) {}
}
