let lagu = [
    { judul: "No Scrubs", genre: "R&B", artis: "TLC", durasi: "3:33" },
    { judul: "Waterfalls", genre: "R&B", artis: "TLC", durasi: "20:39" },
    { judul: "Say My Name", genre: "R&B", artis: "Destiny's Child", durasi: "4:31" },
    { judul: "Love Yourself", genre: "Pop", artis: "Justin Bieber", durasi: "13:53" },
    { judul: "Sorry", genre: "Pop", artis: "Justin Bieber", durasi: "3:20" },
    { judul: "Baby", genre: "Pop", artis: "Justin Bieber", durasi: "20:36" },
    { judul: "The Weekend", genre: "R&B", artis: "SZA", durasi: "4:32" },
    { judul: "Love Galore", genre: "R&B", artis: "SZA", durasi: "4:35" },
    { judul: "Supermodel", genre: "R&B", artis: "SZA", durasi: "3:01" },
    { judul: "The Other Side", genre: "R&B", artis: "SZA", durasi: "4:08" },
    { judul: "Garden (Say It Like Dat)", genre: "R&B", artis: "SZA", durasi: "3:28" },
    { judul: "Broken Clocks", genre: "R&B", artis: "SZA", durasi: "3:51" },
    { judul: "Drew Barrymore", genre: "R&B", artis: "SZA", durasi: "3:51" },
    { judul: "Go Gina", genre: "R&B", artis: "SZA", durasi: "2:43" },
    { judul: "Magnolia", genre: "Hip Hop", artis: "Playboi Carti", durasi: "3:01" },
    { judul: "Shoota", genre: "Hip Hop", artis: "Playboi Carti", durasi: "2:36" },
    { judul: "R.I.P.", genre: "Hip Hop", artis: "Playboi Carti", durasi: "3:12" },
    { judul: "Wokeuplikethis*", genre: "Hip Hop", artis: "Playboi Carti", durasi: "3:55" },
    { judul: "Location", genre: "Hip Hop", artis: "Playboi Carti", durasi: "2:53" },
    { judul: "Poke It Out", genre: "Hip Hop", artis: "Playboi Carti", durasi: "3:06" }
];

function cariArtis(inpArtis) {
    let songArtis = [];
    lagu.forEach(function(laguItem) {
      if (laguItem.artis.toLowerCase().includes(inpArtis.toLowerCase())) {
        songArtis.push(laguItem);
      }
    });
    return songArtis;
  }
  
  function cariGenre(inpGenre) {
    let songGenre = [];
    lagu.forEach(function(laguItem) {
      if (laguItem.genre.toLowerCase().includes(inpGenre.toLowerCase())) {
        songGenre.push(laguItem);
      }
    });
    return songGenre;
  }
  
  function buatPlaylistKurangDariSatuJam() {
    let playlist = [];
    let totalDurasi = 0;

    lagu.forEach(function(laguItem) {
        // Hitung total durasi dalam detik
        let durasiDetik = parseInt(laguItem.durasi.split(':')[0]) * 60 + parseInt(laguItem.durasi.split(':')[1]);

        // Tambahkan lagu ke dalam playlist jika total durasi masih kurang dari 1 jam
        if (totalDurasi + durasiDetik < 3600) {
            playlist.push(laguItem);
            totalDurasi += durasiDetik; // Tambahkan durasi lagu ke totalDurasi
        } else {
            return; // Berhenti jika total durasi sudah lebih dari atau sama dengan 1 jam
        }
    });
    console.log('total durasi', totalDurasi);
    return playlist;
}

  


/n/

//Outpur Cari lagu berdasarkan artis
let artisYangDicari = cariArtis('Playboi carti');
console.log("Lagu yang cocok untuk artis tersebut adalah:");
console.log(artisYangDicari);

//Output Cari lagu berdasarkan genre
let genreYangDicari = cariGenre('hip hop');
console.log("Lagu yang cocok untuk genre tersebut adalah:");
console.log("")
console.log(genreYangDicari);
console.log("");

// Output Buat playlist kurang dari 1 jam
let playlistKurangDariSatuJam = buatPlaylistKurangDariSatuJam();
console.log("Playlist kurang dari 1 jam:");
console.log("");
// console.log(playlistKurangDariSatuJam);
playlistKurangDariSatuJam.forEach(function(lagu) {
  console.log(lagu.judul + " - " + lagu.artis + " (" + lagu.durasi + ")");
});
