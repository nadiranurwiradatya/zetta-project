import { Component } from '@angular/core';
import { ShoesDataService } from '../service/shoes-data.service';

@Component({
  selector: 'app-shoes-detail',
  templateUrl: './shoes-detail.component.html',
  styleUrls: ['./shoes-detail.component.css'],
})
export class ShoesDetailComponent {
  selectShoes: any;
  showEditModal = false; // nilai awal edit form

  constructor(private shoesDataService: ShoesDataService) {
    this.shoesDataService.selectedShoes$.subscribe((shoes) => {
      //shoes  berisi data selectedShoes lalu dipush ke select Shoes untuk dipanggil di html
      this.selectShoes = shoes;
    });
  }

  closeDetail() {
    this.selectShoes = null;
  }

  deleteShoes() {
    this.shoesDataService.deleteShoes(this.selectShoes.id);
    this.selectShoes = null;
  }

  openEditShoesModal() {
    this.showEditModal = true; // Menampilkan Edit Form
  }

  // Fungsi untuk menangani penyimpanan perubahan dari EditShoesComponent
  saveChanges(editedShoes: any) {
    this.shoesDataService.editShoes(editedShoes);
    this.showEditModal = false; // Sembunyikan kembali komponen EditShoesComponent setelah perubahan disimpan
  }
}
