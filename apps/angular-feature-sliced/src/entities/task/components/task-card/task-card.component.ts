import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from 'shared/api';

@Component({
  selector: 'fs-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Input()
  task!: Task;
}
