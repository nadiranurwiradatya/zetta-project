import { Component } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {


  cards: any[] = [
    { id: 1, name: 'Yono Bakri', age: 25, city: 'Ciputat', role: 'Tukang Sapu', img: 'https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/20/6379b23c3fb82-yono-bakrie_665_374.jpg' },
    { id: 2, name: 'Michael', age: 30, city: 'Los Angeles', role: 'Front End', img : 'https://storage.googleapis.com/ekrutassets/blogs/images/000/001/432/original/front-end-developer-EKRUT.jpg' },
    { id: 3, name: 'Emily', age: 28, city: 'Chicago', role: 'Quality Assurance', img : 'https://dashboard.primakara.ac.id/uploads/small_front_end_developer_4caa00681c.png' },
    { id: 4, name: 'John', age: 27, city: 'Houston', role: 'Back End', img : 'https://www.blackxperience.com/assets/content/blackattitude/blacktips/sad-computer-guy.jpg' },
    { id: 5, name: 'Sarah', age: 29, city: 'Miami', role: 'Front End', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' },
    { id: 6, name: 'David', age: 26, city: 'Seattle', role: 'Back End', img : 'https://permadidiki.files.wordpress.com/2014/03/p2.jpg' },
    { id: 7, name: 'Jessica', age: 31, city: 'San Francisco', role: 'Quality Assurance' , img : 'https://itbox.id/wp-content/uploads/2023/01/perbedaan-programmer-dan-developer.jpeg' },
    { id: 8, name: 'Kevin', age: 32, city: 'Boston', role: 'Front End' ,img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 9, name: 'Amanda', age: 24, city: 'Dallas', role: 'Front End', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' },
    { id: 10, name: 'Brian', age: 33, city: 'Austin', role: 'Back End' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 11, name: 'Rachel', age: 26, city: 'Denver', role: 'Quality Assurance', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' },
    { id: 12, name: 'Tyler', age: 28, city: 'Phoenix', role: 'Front End' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 13, name: 'Laura', age: 29, city: 'Atlanta', role: 'Back End', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' },
    { id: 14, name: 'Daniel', age: 27, city: 'San Diego', role: 'Front End' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 15, name: 'Olivia', age: 30, city: 'Orlando', role: 'Quality Assurance' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 16, name: 'Christopher', age: 31, city: 'Portland', role: 'Front End' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 17, name: 'Hannah', age: 25, city: 'Philadelphia', role: 'Back End' , img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 18, name: 'Matthew', age: 28, city: 'Charlotte', role: 'Front End', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' },
    { id: 19, name: 'Alexis', age: 27, city: 'Nashville', role: 'Quality Assurance', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg'},
    { id: 20, name: 'Brandon', age: 29, city: 'Las Vegas', role: 'Back End', img : 'https://doktersehat.com/wp-content/uploads/2021/10/pusing-setelah-haid-doktersehat.jpg' }
  ];
  searchKaryawan: string = ''; // Properti pencarian


  // Fungsi untuk mendapatkan daftar karyawan yang sesuai dengan pencarian
  get filteredCards(): any[] {
    return this.cards.filter(card =>
      card.name.replace(/\s/g, "").toLowerCase().includes(this.searchKaryawan.replace(/\s/g, "").toLowerCase())
    );
  }

 
  
}

