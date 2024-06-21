import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../service/player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  playerList: any[] = [];
  constructor(
    private playerDataService: PlayerDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerDataService.allplayer$.subscribe((player) => {
      this.playerList = player;
    });
    this.playerDataService.updatePlayer();
  }

  goToDetailPlayer(player: any): void {
    this.router.navigate(['detail/:id/detail-player', player.id]);
  }
  goToAddForm(): void {
    this.router.navigate(['form/player-form']);
  }
  goToPlayer(): void {
    this.router.navigate(['player/player-list']);
  }
  goHome(): void {
    this.router.navigate(['']);
  }
}
