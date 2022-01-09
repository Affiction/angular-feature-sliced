import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from 'shared/api';

@Component({
  selector: 'fs-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskRowComponent {
  @Input()
  task!: Task;
}
