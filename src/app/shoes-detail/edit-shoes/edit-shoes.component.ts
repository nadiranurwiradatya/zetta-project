import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-shoes',
  templateUrl: './edit-shoes.component.html',
  styleUrls: ['./edit-shoes.component.css'],
})
export class EditShoesComponent {
  @Input() editedShoes: any;
  @Output() saveChangesEvent = new EventEmitter<any>();

  constructor() {}

  saveChanges() {
    this.saveChangesEvent.emit(this.editedShoes);
  }
}
