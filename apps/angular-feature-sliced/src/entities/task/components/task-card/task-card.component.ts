import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import type { Task } from 'shared/api';

@Component({
  selector: 'fs-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Input()
  task!: Task;

  @Output()
  backToTask: EventEmitter<void> = new EventEmitter();
}
