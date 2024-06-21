import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: { task: string; description: string }[] = []; // Mengubah tipe data tasks menjadi objek yang berisi task dan deskripsi

  addTask(taskData: { task: string; description: string }) {
    this.tasks.push({ task: taskData.task, description: taskData.description });
  }
}
