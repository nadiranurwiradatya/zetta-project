import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private defaultMenu: any[] = [
    {
      name: 'KFC Wings Hot',
      imageUrl:
        'https://images.ctfassets.net/0p42pznmbeec/5nXp1CHNc2xdzXDyGciAoW/a77908464c41cf9c101a61cb8eb647f5/ABC1902-dunked_pops.jpg?h=300&w=400&fit=fill&fm=webp',
      description: 'Hidangan sayap ayam pedas dari KFC.',
      price: 57900,
      spicy: true,
    },
    {
      name: 'KFC Original Recipe Chicken',
      imageUrl:
        'https://files.kfcku.com/uploads/media/dummy/food/thumbnail/kfc-web_sbspicysour-2_t_1.png',
      description: 'Hidangan ayam goreng dengan resep asli KFC.',
      price: 64900,
      spicy: false,
    },
    {
      name: 'KFC Zinger Burger',
      imageUrl:
        'https://files.kfcku.com/uploads/media/dummy/food/kfc-web_orburgerc_l.png',
      description:
        'Burger ayam pedas dengan saus sambal dan sayuran segar di dalam roti empuk.',
      price: 55900,
      spicy: true,
    },
    {
      name: 'KFC Cheese Fries',
      imageUrl:
        'https://files.kfcku.com/uploads/media/dummy/food/kfc-web_frenchfrieslar_l.png',
      description:
        'Kentang goreng renyah yang disajikan dengan saus keju leleh.',
      price: 34900,
      spicy: false,
    },
    {
      name: 'KFC Coleslaw',
      imageUrl:
        'https://files.kfcku.com/uploads/media/food-menu/spesial/thumbnail/kfc-web_9pc-bucket-_t.png',
      description:
        'Salad kubis klasik dengan saus mayones segar dan sedikit rasa manis.',
      price: 24900,
      spicy: false,
    },
  ];

  private menuSubject = new BehaviorSubject<any[]>(this.defaultMenu); //sebagai data yang diamati //menerima any // dan mengandung nilai awal default menu
  allmenu$ = this.menuSubject.asObservable(); //sebagai yang dipanggil di komponen lain atau sebagai observable .

  constructor() {}

  updateMenu(): void {
    //
    this.menuSubject.next(this.defaultMenu); //menu subject dikirimkan ke default menu //agar update an di menu subject dikirim ke default menu
  }

  addMenu(newMenu: any) {
    //berisi newMenuData di menuListCOmponent
    this.defaultMenu.push(newMenu);
    this.menuSubject.next(this.defaultMenu);
    alert('data add New Menu masuk di add menu'); //push new menu ke default menu
  }

  private selectedMenuSubject = new BehaviorSubject<any>(null);
  selectedMenu$ = this.selectedMenuSubject.asObservable();
  selectMenu(menu: any) {
    this.selectedMenuSubject.next(menu);
  }
}
