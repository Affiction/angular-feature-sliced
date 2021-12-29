import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
