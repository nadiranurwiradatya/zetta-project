import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayerType } from './interface';
@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private defaultPlayer: any[] = [
    {
      id: 1,
      nickname: 'CW',
      origin: 'Calvin Winata',
      role: 'Gold Laner',
      email: 'cw@example.com',
      hero: 'Wan Wan',
      flag: 'assets/img/indo.png',
      imageUrl: 'assets/img/onic_cw.png',
      bio: 'Seorang penggemar game yang menikmati petualangan di dunia virtual dan mengatasi tantangan yang diberikan setiap permainan.',
      addresses: [
        {
          address: 'Jalan Imogiri',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
        {
          address: 'Jalan Jendral',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
      ],
    },
    {
      id: 2,
      nickname: 'Sanz',
      origin: 'Gilang',
      role: 'Mid Laner',
      email: 'sanz@example.com',
      hero: 'Pharsa',
      flag: 'assets/img/indo.png',
      imageUrl: 'assets/img/onic_sanz.png',
      bio: 'Seorang pemain yang antusias dalam menjelajahi berbagai genre game, mulai dari RPG hingga game aksi, dan menikmati pengalaman yang berbeda-beda.',
      addresses: [
        {
          address: 'Jalan Imogiri',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
        {
          address: 'Jalan Jendral',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
      ],
    },
    {
      id: 3,
      nickname: 'Kairi',
      origin: 'Kairi Rayosdelsol',
      role: 'Jungler',
      email: 'kairi@example.com',
      hero: 'Lancelot',
      flag: 'assets/img/ph.png',
      imageUrl: 'assets/img/onic_kairi.png',
      bio: 'Seorang pemain yang antusias dalam menjelajahi berbagai genre game, mulai dari RPG hingga game aksi, dan menikmati pengalaman yang berbeda-beda.',
      addresses: [
        {
          address: 'Jalan Solo',
          zipcode: 333333,
          city: 'Sleman',
          country: 'Jogjakarta',
        },
      ],
    },
    {
      id: 4,
      nickname: 'Kiboy',
      origin: 'Nicky Pontonuwu',
      role: 'Roamer',
      email: 'kiboy@example.com',
      hero: 'Chou',
      flag: 'assets/img/indo.png',
      imageUrl: 'assets/img/onic_kiboy.png',
      bio: 'Seorang pemain yang antusias dalam menjelajahi berbagai genre game, mulai dari RPG hingga game aksi, dan menikmati pengalaman yang berbeda-beda.',
      addresses: [
        {
          address: 'Jalan Imogiri',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
        {
          address: 'Jalan Jendral',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
      ],
    },
    {
      id: 5,
      nickname: 'Buts',
      origin: 'Muhammad Sanubari',
      role: 'Exp Laner',
      email: 'buts@example.com',
      hero: 'Terizla',
      flag: 'assets/img/indo.png',
      imageUrl: 'assets/img/onic_buts.png',
      bio: 'Seorang pemain yang antusias dalam menjelajahi berbagai genre game, mulai dari RPG hingga game aksi, dan menikmati pengalaman yang berbeda-beda.',
      addresses: [
        {
          address: 'Jalan Imogiri',
          zipcode: 555555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
        {
          address: 'Jalan Jendral',
          zipcode: 655555,
          city: 'Bantul',
          country: 'Jogjakarta',
        },
      ],
    },
  ];
  private playerSubject = new BehaviorSubject<PlayerType[]>(this.defaultPlayer);
  allplayer$ = this.playerSubject.asObservable();

  constructor() {}

  updatePlayer(): void {
    this.playerSubject.next(this.defaultPlayer);
  }

  getPlayerById(playerId: number): any | undefined {
    return this.defaultPlayer.find((player) => player.id === playerId);
  }
  private nextId: number = this.defaultPlayer.length + 1;

  addPlayer(newPlayer: PlayerType) {
    newPlayer.id = this.nextId++;
    this.defaultPlayer.push(newPlayer);
    this.updatePlayer();
  }

  deletePlayer(playerId: number): void {
    const playerIndex = this.defaultPlayer.findIndex(
      (player) => player.id === playerId
    );
    if (playerIndex !== -1) {
      this.defaultPlayer.splice(playerIndex, 1);
      this.updatePlayer();
    }
  }

  editPlayer(updatedPlayer: PlayerType): void {
    const currentPlayer = [...this.playerSubject.value];
    const index = currentPlayer.findIndex(
      (player) => player.id === updatedPlayer.id
    );

    if (index !== -1) {
      currentPlayer[index] = updatedPlayer;
      this.defaultPlayer = currentPlayer;

      this.updatePlayer();
      console.log('current player adalah', currentPlayer);
    }
  }
}
