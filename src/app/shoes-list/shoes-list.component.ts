import { Component, OnInit } from '@angular/core';
import { ShoesDataService } from '../service/shoes-data.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css'],
})
export class ShoesListComponent implements OnInit {
  shoesList: any[] = [];

  constructor(private shoesDataService: ShoesDataService) {}

  ngOnInit(): void {
    this.shoesDataService.allshoes$.subscribe((shoes) => {
      this.shoesList = shoes;
    });
    this.shoesDataService.updateShoes();
  }

  selectShoe(shoe: any) {
    this.shoesDataService.selectedShoes(shoe);
  }
}
