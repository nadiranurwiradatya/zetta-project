import { Component } from '@angular/core';
import { MenuService } from '../service/menu-data.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.css',
})
export class MenuFormComponent {
  newMenuForm: any = {};

  constructor(private menuService: MenuService) {}
  addNewMenu() {
    this.menuService.addMenu(this.newMenuForm);
    this.newMenuForm = {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      spicy: '',
    };
  }
}
