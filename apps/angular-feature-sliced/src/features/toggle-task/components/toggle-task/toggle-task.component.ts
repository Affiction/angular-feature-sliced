import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from 'shared/api';

@Component({
  selector: 'fs-toggle-task',
  templateUrl: './toggle-task.component.html',
  styleUrls: ['./toggle-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleTaskComponent {
  @Input()
  task!: Task;

  @Input()
  withStatus = false;
}
