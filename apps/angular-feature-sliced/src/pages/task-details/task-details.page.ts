import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskFacade } from 'entities/task';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fs-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailsPage {
  loadTask$ = this.route.params.pipe(
    tap(({ id }) => {
      this.taskFacade.loadTask(id);
    })
  );

  constructor(
    public readonly taskFacade: TaskFacade,
    private readonly route: ActivatedRoute
  ) {}
}
