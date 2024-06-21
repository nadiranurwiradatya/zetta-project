"use strict";
const dataProvinsi = [
    {
        Provinsi: "Jawa Timur",
        Suara: {
            amin: 1000,
            prabu: 2020,
            gama: 900
        },
    },
    {
        Provinsi: "Jawa Barat",
        Suara: {
            amin: 1500,
            prabu: 2500,
            gama: 1200
        },
    },
    {
        Provinsi: "Sumatera Selatan",
        Suara: {
            amin: 800,
            prabu: 1200,
            gama: 700
        },
    },
    {
        Provinsi: "Yogyakarta",
        Suara: {
            amin: 900,
            prabu: 100,
            gama: 700
        },
    },
    {
        Provinsi: "Jawa Tengah",
        Suara: {
            amin: 900,
            prabu: 100,
            gama: 2700
        },
    }
];
function cariProvinsiDominanUntukKandidat(namaKandidat) {
    let provinsiDominan = null;
    let suaraKandidatProvinsiDominan = dataProvinsi[0].Suara[namaKandidat]; // Menggunakan suara kandidat dari provinsi pertama sebagai nilai awalnya
    dataProvinsi.forEach(provinsi => {
        const suaraKandidatProvinsi = provinsi.Suara[namaKandidat];
        if (suaraKandidatProvinsi > suaraKandidatProvinsiDominan) { //
            suaraKandidatProvinsiDominan = suaraKandidatProvinsi;
            provinsiDominan = provinsi;
        }
    });
    if (provinsiDominan === null) {
        throw new Error("Tidak ada provinsi ditemukan");
    }
    return provinsiDominan;
}
// Contoh penggunaan
const namaKandidat = 'gama';
const provinsiDominan = cariProvinsiDominanUntukKandidat(namaKandidat);
console.log(`- Provinsi dengan suara terbanyak untuk kandidat ${namaKandidat}: ${provinsiDominan.Provinsi}`);
function totalSuaraKandidat(kandidat) {
    let totalSuara = 0;
    dataProvinsi.forEach(provinsi => {
        totalSuara += provinsi.Suara[kandidat];
    });
    return totalSuara;
}
// Contoh penggunaan:
const inputKandidat = 'prabu'; // Input kandidat yang diinginkan
const totalSuara = totalSuaraKandidat(inputKandidat);
console.log(`- Total suara untuk kandidat ${inputKandidat}: ${totalSuara}`);
function persentasePaslon() {
    const totalSuaraAmin = totalSuaraKandidat('amin');
    const totalSuaraPrabu = totalSuaraKandidat('prabu');
    const totalSuaraGama = totalSuaraKandidat('gama');
    const totalSuara = totalSuaraAmin + totalSuaraPrabu + totalSuaraGama;
    const persentaseAmin = (totalSuaraAmin / totalSuara) * 100;
    const persentasePrabu = (totalSuaraPrabu / totalSuara) * 100;
    const persentaseGama = (totalSuaraGama / totalSuara) * 100;
    return {
        amin: persentaseAmin,
        prabu: persentasePrabu,
        gama: persentaseGama
    };
}
// Contoh penggunaan:
const persentasePaslonData = persentasePaslon();
console.log('- Persentase suara masing-masing paslon:');
console.log('Amin:', persentasePaslonData.amin.toFixed(2) + '%');
console.log('Prabu:', persentasePaslonData.prabu.toFixed(2) + '%');
console.log('Gama:', persentasePaslonData.gama.toFixed(2) + '%');
