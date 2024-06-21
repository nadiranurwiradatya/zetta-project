import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu-data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  list: any[] = [];

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuService.allmenu$.subscribe((menu) => {
      this.list = menu;
    });
    this.menuService.updateMenu();
  }

  showMenuDetail(menuSelect: any) {
    this.menuService.selectMenu(menuSelect);
  }
}
