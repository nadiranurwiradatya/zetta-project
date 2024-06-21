import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerDataService } from '../service/player-data.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
  isNewPlayer: boolean = true;
  playerData: any = {
    nickname: '',
    imageUrl: '',
  };

  constructor(
    private playerDataService: PlayerDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check if the form is for editing
    this.route.params.subscribe((params) => {
      if (params) {
      }
      //subscribe ke param
      console.log('berhasil', params);

      if (params['id']) {
        const playerId = Number(params['id']); //mengambil id dan mengubahnua
        const player = this.playerDataService.getPlayerById(playerId);
        if (player) {
          this.isNewPlayer = false;
          this.playerData = { ...player };
        }
      }
    });
  }

  onSubmit(): void {
    if (this.isNewPlayer) {
      this.playerDataService.addPlayer(this.playerData);
    } else {
      this.playerDataService.editPlayer(this.playerData);
    }
    this.router.navigate(['player/player-list']);
  }
  goToPlayer(): void {
    this.router.navigate(['player/player-list']);
  }
}
