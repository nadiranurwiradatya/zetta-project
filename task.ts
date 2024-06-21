type Kandidat = 'amin' | 'prabu' | 'gama'; //mendeklarasikan kandidat sebagai kunci di data provinsi agar hanya bertipe amin ,prabu dan gama (Union)

type Provinsi = {
    Provinsi: string;
    Suara: Record<Kandidat, number>;  //semua kunci adalah kandidat , nilainya number  (object)
};

const dataProvinsi: Provinsi[] = [
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


function cariProvinsiDominanUntukKandidat(namaKandidat: Kandidat): Provinsi {  //mem for.each semua data provinsi sesuai kandidat yang diinputkan
    let provinsiDominan: Provinsi | null = null;  
    let suaraKandidatProvinsiDominan = dataProvinsi[0].Suara[namaKandidat]; // Menggunakan suara kandidat dari provinsi pertama sebagai nilai awalnya
    
    dataProvinsi.forEach(provinsi => {
        const suaraKandidatProvinsi = provinsi.Suara[namaKandidat];
        
        if (suaraKandidatProvinsi > suaraKandidatProvinsiDominan) {         //
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
const namaKandidat: Kandidat = 'gama';
const provinsiDominan = cariProvinsiDominanUntukKandidat(namaKandidat);
console.log(`- Provinsi dengan suara terbanyak untuk kandidat ${namaKandidat}: ${provinsiDominan.Provinsi}`);





function totalSuaraKandidat(kandidat: Kandidat): number {
    let totalSuara :number = 0;
    dataProvinsi.forEach(provinsi => {
        totalSuara += provinsi.Suara[kandidat];
    });
    return totalSuara;
}

// Contoh penggunaan:
const inputKandidat: Kandidat = 'prabu'; // Input kandidat yang diinginkan
const totalSuara = totalSuaraKandidat(inputKandidat);
console.log(`- Total suara untuk kandidat ${inputKandidat}: ${totalSuara}`);






function persentasePaslon(): Record<Kandidat, number> {
    const totalSuaraAmin: number = totalSuaraKandidat('amin');
    const totalSuaraPrabu: number = totalSuaraKandidat('prabu');
    const totalSuaraGama: number = totalSuaraKandidat('gama');
    
    const totalSuara: number = totalSuaraAmin + totalSuaraPrabu + totalSuaraGama;
    
    const persentaseAmin: number = (totalSuaraAmin / totalSuara) * 100;
    const persentasePrabu: number = (totalSuaraPrabu / totalSuara) * 100;
    const persentaseGama: number = (totalSuaraGama / totalSuara) * 100;
    

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




