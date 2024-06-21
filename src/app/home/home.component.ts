import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../service/player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToPlayer(): void {
    this.router.navigate(['player/player-list']);
  }
}
