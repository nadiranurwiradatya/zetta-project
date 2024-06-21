import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() receiveTasks: { task: string; description: string }[] = [];
  selectedTask: { task: string; description: string } | undefined;

  showDetail(task: { task: string; description: string }) {
    this.selectedTask = task;
  }

  closeDetail() {
    this.selectedTask = undefined;
  }
}
