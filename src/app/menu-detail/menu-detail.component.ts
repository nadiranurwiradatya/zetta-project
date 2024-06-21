import { Component } from '@angular/core';
import { MenuService } from '../service/menu-data.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.css',
})
export class MenuDetailComponent {
  selectedMenu: any;

  constructor(private menuService: MenuService) {
    this.menuService.selectedMenu$.subscribe((item) => {
      this.selectedMenu = item;
    });
  }
  closeDetail() {
    this.selectedMenu = null;
  }
}
