import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private defaultPlayer: any[] = [
    {
      id: 1,
      nickname: 'saykots',
      origin: 'Risqi Iskandar',
      role: 'Exp Laner',
      age: 29,
      hero: 'Yu Zhong',
      imageUrl: 'assets/img/evos_saykots.png',
      bio: 'Seorang penggemar game yang menikmati petualangan di dunia virtual dan mengatasi tantangan yang diberikan setiap permainan.',
    },
    {
      id: 2,
      nickname: 'Branz',
      origin: 'Jabran Wiloko',
      role: 'Gold Laner',
      age: 18,
      hero: 'Claude',
      imageUrl: 'assets/img/evos_branz.png',
      bio: 'Seorang pemain yang antusias dalam menjelajahi berbagai genre game, mulai dari RPG hingga game aksi, dan menikmati pengalaman yang berbeda-beda.',
    },
    {
      id: 3,
      nickname: 'Ferxic',
      origin: 'Ferdyansyah Kammarrudin',
      role: 'Jungler',
      age: 21,
      hero: 'Ling',
      imageUrl: 'assets/img/evos_ferxiic.png',
      bio: 'Seorang kompetitor yang bersemangat, selalu mencari kesempatan untuk meningkatkan keterampilan dan meraih kemenangan dalam pertandingan multiplayer.',
    },
    {
      id: 4,
      nickname: 'hijume',
      origin: 'Dalvin Putra',
      role: 'Mid Laner',
      age: 16,
      hero: 'Yve',
      imageUrl: 'assets/img/evos_hijume.png',
      bio: 'Seorang penggemar esports yang senang menyaksikan turnamen profesional dan mendukung tim favoritnya.',
    },
    {
      id: 5,
      nickname: 'Dreams',
      origin: 'Rachmad Wahyudi',
      role: 'Roamer',
      age: 20,
      hero: 'kadita',
      imageUrl: 'assets/img/evos_dreams.png',
      bio: 'Seorang kolektor yang gigih, mencari barang-barang langka dan mengumpulkan perangkat keras dan merchandise game.',
    },
    {
      id: 6,
      nickname: 'Tazz',
      origin: 'Darrel Jovanco Wijaya',
      role: 'Jungler',
      age: 17,
      hero: 'Fanny',
      imageUrl: 'assets/img/evos_tazz.png',
      bio: 'Seorang kreator konten yang suka berbagi pengalaman bermainnya melalui streaming atau membuat video game di platform media sosial.',
    },
    {
      id: 7,
      nickname: 'Dlar',
      origin: 'Gerald Trinchera',
      role: 'Exp Laner',
      age: 17,
      hero: 'Uranus',
      imageUrl: 'assets/img/evos_dlar.png',
      bio: 'Mobile Legends adalah permainan tim. Komunikasi yang baik dan kerjasama tim sangat penting untuk meraih kemenangan. Berikan informasi kepada rekan tim Anda dan bersiaplah untuk membantu mereka saat dibutuhkan.',
    },
  ];
  private playerSubject = new BehaviorSubject<any[]>(this.defaultPlayer);
  allplayer$ = this.playerSubject.asObservable();

  constructor() {}

  updatePlayer(): void {
    this.playerSubject.next(this.defaultPlayer);
  }
  getPlayerById(playerId: number): any | undefined {
    return this.defaultPlayer.find((player) => player.id === playerId); //mencari id yang cocok dengan player
  }
  private nextId: number = this.defaultPlayer.length + 1;
  addPlayer(newPlayer: any) {
    newPlayer.id = this.nextId++; // Menambahkan id ke sepatu baru
    this.defaultPlayer.push(newPlayer); // Menambahkan sepatu baru ke daftar sepatu
    this.playerSubject.next(this.defaultPlayer); // Emit daftar sepatu yang telah diperbarui
  }
  deletePlayer(playerId: number): void {
    // Cari index pemain berdasarkan ID
    const playerIndex = this.defaultPlayer.findIndex(
      (player) => player.id === playerId
    );
    // Jika pemain ditemukan, hapus dari array
    if (playerIndex !== -1) {
      this.defaultPlayer.splice(playerIndex, 1);
      // Update subjek untuk memberi tahu komponen yang berlangganan bahwa pemain telah dihapus
      this.playerSubject.next(this.defaultPlayer);
    }
  }

  editPlayer(updatedPlayer: any): void {
    const index = this.defaultPlayer.findIndex(
      (player) => player.id === updatedPlayer.id
    );
    if (index !== -1) {
      this.defaultPlayer[index] = updatedPlayer;
      this.playerSubject.next(this.defaultPlayer);
    }
  }
}
