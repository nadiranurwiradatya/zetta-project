const favoriteBooks = [
    {
        title: "Koala Kumal",
        rate: 5,
        harga: 50000,
        diskon: 20,
        pajak: 5,
        stok: 5,
    },
    {
        title: "Cinta Brontosaurus",
        rate: 8,
        harga: 75000,
        diskon: 20,
        pajak: 5,
        stok: 2,
    },
    {
        title: "Marmut Merah Jambu",
        rate: 10,
        harga: 100000,
        diskon: 20,
        pajak: 5,
        stok: 5,
    },
    {
        title: "Kambing Jantan",
        rate: 4,
        harga: 60000,
        diskon: 20,
        pajak: 5,
        stok: 5,
    }
];
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function pembelianBuku(detailBuku, jumlahBeli, durasiKredit) {
    const hargaAwal = detailBuku.harga;
    const totalDiskon = detailBuku.diskon / 100;
    const totalPajak = detailBuku.pajak / 100;

    let stokTersedia = detailBuku.stok;
    let totalHarga = 0;
    let totalPembayaranKredit = 0;

    for (let i = 0; i < jumlahBeli; i++) {
        if (stokTersedia === 0) {
            console.log("Stok buku '" + detailBuku.title + "' sudah habis.");
            break;
        }

        const jumlahDiskon = hargaAwal * totalDiskon;
        const hargaSetelahDiskon = hargaAwal - jumlahDiskon;

        const jumlahPajak = hargaAwal * totalPajak;
        const hargaSetelahPajak = hargaAwal + jumlahPajak;

        totalHarga += hargaSetelahPajak;
        stokTersedia--;

        console.log("Buku ke-" + (i + 1));
        console.log("Judul Buku: " + detailBuku.title);
        console.log("Harga Awal : " + hargaAwal);
        console.log("Diskon? " + (detailBuku.diskon > 0));
        console.log("Jumlah Diskon: Rp" + jumlahDiskon);
        console.log("Harga Setelah Diskon: Rp" + hargaSetelahDiskon);
        console.log("Jumlah Pajak : Rp" + jumlahPajak);
        console.log("Harga Setelah Pajak : Rp" + hargaSetelahPajak);
        console.log("");

        totalPembayaranKredit += hargaSetelahPajak;
    }

    console.log("Total Harga untuk " + jumlahBeli + " buku: Rp" + totalHarga);

    if (durasiKredit > 0) {
        console.log("Total Pembayaran Kredit: Rp" + totalPembayaranKredit);
        console.log("Jadwal Pembayaran Kredit:");
        const jadwalPembayaran = generateJadwalPembayaran(totalPembayaranKredit, durasiKredit);
        jadwalPembayaran.forEach((pembayaran) => {
            console.log("Bulan ke-" + pembayaran.bulanKe + ": " + formatDate(pembayaran.tanggalJatuhTempo));
            console.log("Jumlah Pembayaran: Rp" + pembayaran.jumlahPembayaran);
        });
    }

    if (stokTersedia > 0) {
        console.log("Setelah pembelian, masih tersedia " + stokTersedia + " buku lagi.");
    } else {
        console.log("Setelah pembelian, stok buku sudah habis.");
    }
}

function generateJadwalPembayaran(totalPembayaranKredit, durasiKredit) {
    const pembayaranPerBulan = [];
    let bulanKe = 1;
    let totalPembayaranSisa = totalPembayaranKredit;

    while (totalPembayaranSisa > 0 && bulanKe <= durasiKredit) {
        const tanggalJatuhTempo = new Date();
        tanggalJatuhTempo.setMonth(tanggalJatuhTempo.getMonth() + bulanKe);
        pembayaranPerBulan.push({
            bulanKe: bulanKe,
            tanggalJatuhTempo: tanggalJatuhTempo,
            jumlahPembayaran: totalPembayaranKredit / durasiKredit
        });
        totalPembayaranSisa -= totalPembayaranKredit / durasiKredit;
        bulanKe++;
    }

    return pembayaranPerBulan;
}

const judulBukuPembelian = "Cinta Brontosaurus";
const jumlahBeli = 1;
const durasiKredit = 5; 

const bukuDitemukan = favoriteBooks.find((buku) => buku.title === judulBukuPembelian);

if (bukuDitemukan) {
    pembelianBuku(bukuDitemukan, jumlahBeli, durasiKredit);
} else {
    console.log("Buku dengan judul '" + judulBukuPembelian + "' tidak ditemukan dalam data.");
}