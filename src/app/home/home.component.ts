import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../service/player-data.service';
import { Router } from '@angular/router';
import { PlayerType } from '../service/interface';
import { AccentRemovalPipe } from '../service/pipes/accent-removal/accent-removal.pipe';
import { CombineWordsPipe } from '../service/pipes/combine-words/combine-words.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AccentRemovalPipe, CombineWordsPipe],
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  playerList: PlayerType[] = [];
  searchTerm: string = '';
  constructor(
    private playerDataService: PlayerDataService,
    private router: Router,
    private accentPipe: AccentRemovalPipe,
    private combinePipe: CombineWordsPipe
  ) {}

  ngOnInit(): void {
    this.playerDataService.allplayer$.subscribe((player) => {
      this.playerList = player;
    });
    // this.playerDataService.updatePlayer();
  }

  goToDetailPlayer(player: PlayerType): void {
    this.router.navigate(['detail/:id/detail-player', player.id]);
  }
  goToAddForm(): void {
    this.router.navigate(['form/player-form']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  get filteredPlayer(): PlayerType[] {
    return this.playerList.filter((player) =>
      this.combinePipe
        .transform(this.accentPipe.transform(player.nickname))
        .includes(
          this.combinePipe.transform(this.accentPipe.transform(this.searchTerm))
        )
    );
  }
}
