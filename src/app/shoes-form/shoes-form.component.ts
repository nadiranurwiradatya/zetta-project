import { Component } from '@angular/core';
import { ShoesDataService } from '../service/shoes-data.service';

@Component({
  selector: 'app-shoes-form',
  templateUrl: './shoes-form.component.html',
  styleUrl: './shoes-form.component.css',
})
export class ShoesFormComponent {
  newShoesForm: any = {};

  constructor(private shoesDataService: ShoesDataService) {}
  addNewShoes() {
    const newShoes = { ...this.newShoesForm }; // Salin properti yang ada di newShoesForm
    this.shoesDataService.addShoes(newShoes); // Tambahkan sepatu baru ke data service
    this.newShoesForm = {
      brand: '',
      model: '',
      size: '',
      price: '',
      imageUrl: '',
      description: '',
      id: '',
    };
  }
}
