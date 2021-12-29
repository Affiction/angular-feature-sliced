import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListPage {}
