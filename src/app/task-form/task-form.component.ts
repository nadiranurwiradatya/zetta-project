import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TaskFormComponent {
  taskText: string = '';
  taskDesc: string = '';

  @Output() taskAdded = new EventEmitter<{
    task: string;
    description: string;
  }>();

  addTask() {
    if (this.taskDesc.trim() !== '' || this.taskText.trim() !== '') {
      this.taskAdded.emit({
        task: this.taskText,
        description: this.taskDesc,
      }); // Mengirim objek task beserta deskripsi
      this.taskText = '';
      this.taskDesc = ''; // Reset input setelah task dikirim
    }
  }
}
