import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerDataService } from '../service/player-data.service';
import { PlayerType } from '../service/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  player: PlayerType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private playerDataService: PlayerDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const playerId = Number(params['id']);
      this.player = this.playerDataService.getPlayerById(playerId);
    });
  }

  goToEditForm(playerId: number): void {
    this.router.navigate(['form/player-form', playerId]);
  }

  deletePlayer(playerId: number): void {
    // Panggil metode untuk menghapus pemain dari service
    this.playerDataService.deletePlayer(playerId);
    // Redirect kembali ke halaman utama setelah menghapus
    this.router.navigate(['']);
  }

  goToPlayer(): void {
    this.router.navigate(['']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
