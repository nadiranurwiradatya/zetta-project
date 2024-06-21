import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoesDataService {
  private defaultShoes: any[] = [
    {
      id: 1,
      brand: 'Nike',
      model: 'Air Max',
      size: 42,
      price: 150,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas , bisa menyala abangku',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-shoes-EBZrb8.png',
    },
    {
      id: 2,
      brand: 'Nike',
      model: 'Dunk Panda',
      size: 41,
      price: 160,
      description:
        'Sepatu warna hitam putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png',
    },
    {
      id: 3,
      brand: 'Nike',
      model: 'Air Force 1 High',
      size: 40,
      price: 120,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/67031162-9cc5-481d-8ffe-7ada8f3d78bd/custom-nike-air-force-1-high-by-you-shoes.png',
    },
    {
      id: 4,
      brand: 'Nike',
      model: 'Blazer 77',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-5231beb0-85df-404d-bed4-5501a7f24422/blazer-mid-77-shoes-q5gmbj.png',
    },
    {
      id: 5,
      brand: 'Nike',
      model: 'Air Force',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png',
    },
    {
      id: 6,
      brand: 'Nike',
      model: 'Air Jordan Low',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b6fffc1-ab60-4e91-bff9-3281a3f30d72/air-max-ap-shoes-3Rdq04.png',
    },
    {
      id: 7,
      brand: 'Nike',
      model: 'Air Jordan Low',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/85d7377e-5f14-472f-9d58-ce728ad8d85b/sb-zoom-blazer-mid-skate-shoe-cM9sg4.png',
    },
    {
      id: 8,
      brand: 'Nike',
      model: 'Air Jordan Mid',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
    },
    {
      id: 9,
      brand: 'Nike',
      model: 'Air Bender Low',
      size: 42,
      price: 300,
      description:
        'Sepatu warna putih dan sangat kookoh harga sesuai sama kualitas',
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c76e2119-acb7-4944-9085-d4f5ae2bda4a/go-flyease-easy-on-off-shoes-3svRCL.png',
    },
    {
      id: 10,
      brand: 'Nike',
      model: 'Air Jordan Travis Scott',
      size: 42,
      price: 300,
      description: 'Sepatu kerja dengan rapper travis scott yang sangat langka',
      imageUrl:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/15b77901-eb6e-46a8-8c2e-76beb0b5b42a/air-jordan-1-low-travis-scott-x-fragment-release-date.jpg',
    },
  ];

  private shoesSubject = new BehaviorSubject<any[]>(this.defaultShoes);
  allshoes$ = this.shoesSubject.asObservable();

  constructor() {}

  updateShoes(): void {
    this.shoesSubject.next(this.defaultShoes);
  }

  private nextId: number = this.defaultShoes.length + 1;
  addShoes(newShoes: any) {
    newShoes.id = this.nextId++; // Menambahkan id ke sepatu baru
    this.defaultShoes.push(newShoes); // Menambahkan sepatu baru ke daftar sepatu
    this.shoesSubject.next(this.defaultShoes); // Emit daftar sepatu yang telah diperbarui
  }

  private selectedShoesSubject = new BehaviorSubject<any>(null);
  selectedShoes$ = this.selectedShoesSubject.asObservable();
  selectedShoes(shoes: any) {
    this.selectedShoesSubject.next(shoes);
  }
  editShoes(editedShoes: any): void {
    const index = this.defaultShoes.findIndex(
      (shoe) => shoe.id === editedShoes.id
    );
    if (index !== -1) {
      this.defaultShoes[index] = editedShoes;
      this.shoesSubject.next(this.defaultShoes);
    }
  }

  deleteShoes(id: number): void {
    this.defaultShoes = this.defaultShoes.filter((shoes) => shoes.id !== id);
    this.shoesSubject.next(this.defaultShoes);
  }
}
