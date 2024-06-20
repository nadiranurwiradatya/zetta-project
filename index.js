const users = [
    {
      first_name: "John",
      last_name: "Doe",
      date_of_birth: "1990-05-15",
      place_of_birth: "New York",
      addresses: [
        {
          street: "123 Main Street",
          city: "New York",
          state: "NY",
          zip_code: "10001",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Alice",
      last_name: "Smith",
      date_of_birth: "1984-07-06",
      place_of_birth: "Chicago",
      addresses: [
        {
          street: "789 Oak Avenue",
          city: "New York",
          state: "IL",
          zip_code: "60601",
          country: "USA"
        },
        {
          street: "10 Maple Drive",
          city: "Miami",
          state: "FL",
          zip_code: "33101",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Michael",
      last_name: "Johnson",
      date_of_birth: "1988-03-25",
      place_of_birth: "Houston",
      addresses: [
        {
          street: "111 Pine Street",
          city: "Houston",
          state: "TX",
          zip_code: "77001",
          country: "USA"
        },
        {
          street: "222 Oak Avenue",
          city: "Austin",
          state: "TX",
          zip_code: "73301",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Emily",
      last_name: "Brown",
      date_of_birth: "1992-11-10",
      place_of_birth: "Seattle",
      addresses: [
        {
          street: "333 Elm Street",
          city: "Tuscon",
          state: "WA",
          zip_code: "98101",
          country: "USA"
        }
      ]
    },
    {
      first_name: "David",
      last_name: "Martinez",
      date_of_birth: "1984-07-08",
      place_of_birth: "Miami",
      addresses: [
        {
          street: "555 Palm Avenue",
          city: "Miami",
          state: "FL",
          zip_code: "33109",
          country: "USA"
        },
        {
          street: "666 Ocean Drive",
          city: "Orlando",
          state: "FL",
          zip_code: "32801",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Sarah",
      last_name: "Taylor",
      date_of_birth: "1995-02-14",
      place_of_birth: "Boston",
      addresses: [
        {
          street: "777 Park Street",
          city: "Boston",
          state: "MA",
          zip_code: "02108",
          country: "USA"
        },
        {
          street: "888 Lakeview Drive",
          city: "Cambridge",
          state: "MA",
          zip_code: "02139",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Daniel",
      last_name: "Wilson",
      date_of_birth: "1987-12-01",
      place_of_birth: "San Francisco",
      addresses: [
        {
          street: "999 Grove Avenue",
          city: "San Francisco",
          state: "CA",
          zip_code: "94102",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Jessica",
      last_name: "Garcia",
      date_of_birth: "1991-06-30",
      place_of_birth: "Phoenix",
      addresses: [
        {
          street: "1111 Desert Road",
          city: "Phoenix",
          state: "AZ",
          zip_code: "85001",
          country: "USA"
        },
        {
          street: "1212 Mountain View Drive",
          city: "Tucson",
          state: "AZ",
          zip_code: "85701",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Ryan",
      last_name: "Lopez",
      date_of_birth: "1989-04-18",
      place_of_birth: "Denver",
      addresses: [
        {
          street: "1313 Canyon Street",
          city: "Denver",
          state: "CO",
          zip_code: "80202",
          country: "USA"
        }
      ]
    },
    {
      first_name: "Michelle",
      last_name: "Hernandez",
      date_of_birth: "1993-08-05",
      place_of_birth: "Atlanta",
      addresses: [
        {
          street: "1515 Peachtree Street",
          city: "Atlanta",
          state: "GA",
          zip_code: "30301",
          country: "USA"
        },
        {
          street: "1616 River Road",
          city: "Savannah",
          state: "GA",
          zip_code: "31401",
          country: "USA"
        },
        {
          street: "1717 Ocean Avenue",
          city: "Athens",
          state: "GA",
          zip_code: "30601",
          country: "USA"
        }
      ]
    }
];









//Fungsi Cari Nama
// function cariNama(inputNama) {
//   let hasilPencarian = [];

//   users.forEach(function(user) {
//       const fullName = user.first_name + ' ' + user.last_name;
//       const regex = new RegExp(inputNama.toLowerCase().split('').join('.*'), 'i');
//       if (fullName.toLowerCase().match(regex)) {
//           hasilPencarian.push(user);
//       }
//   });

//   return hasilPencarian;
// }

// const searchResult = cariNama("sartay");
// console.log(`Berikut adalah nama yang Anda cari `);
// console.log(JSON.stringify(searchResult, null, 1));




// Kurang Handle Error gimana kalau masukin angka 4 
// //Fungsi Berdasar cari jumlah alamat
// function cariBerdasarkanJumlahAlamat(jumlahAlamat) {
//     const hasilPencarian = [];

//     users.forEach(user => {
//         if (user.addresses.length === jumlahAlamat) {
//             hasilPencarian.push(user);
//         }
//     });

//     return hasilPencarian;
// }

// const hasilPencarian = cariBerdasarkanJumlahAlamat(4);

// console.log("Data User Berdasar Alamat");
// console.log(" ");
// // Loop melalui setiap objek hasil pencarian dan mencetak informasi
// hasilPencarian.forEach(user => {

//     console.log("Nama: " + user.first_name + " " + user.last_name);
//     console.log("Tanggal Lahir: " + user.date_of_birth);
//     console.log("Tempat Lahir: " + user.place_of_birth);
//     console.log("Alamat:");
//     user.addresses.forEach(address => {
//         console.log("- " + address.street + ", " + address.city + ", " + address.state + ", " + address.zip_code + ", " + address.country);
//     });
//     console.log("-----------------------------------------");
// });







// Jadikan 1
// //Fungsi Mengurutkan Berdasar Tanggal Lahir
// function sortUsersByDOB(users, order) {
//   if (order !== 'asc' && order !== 'desc') {
//       throw new Error("Invalid order. Please choose 'asc' or 'desc'.");
//   }

//   const sortedUsers = [...users];

//   sortedUsers.sort((a, b) => {
//       const dateA = new Date(a.date_of_birth);
//       const dateB = new Date(b.date_of_birth);

//       if (order === 'asc') {
//           return dateA - dateB;
//       } else {
//           return dateB - dateA;
//       }
//   });

//   return sortedUsers.map(user => ({
//       name: user.first_name + " " + user.last_name,
//       date_of_birth: user.date_of_birth
//   }));
// }

// // Contoh penggunaan:
// const sortedUsersByDOBAsc = sortUsersByDOB(users, 'asc');
// console.log("Users sorted by date of birth in ascending order:", sortedUsersByDOBAsc);

// const sortedUsersByDOBDesc = sortUsersByDOB(users, 'desc');
// console.log("Users sorted by date of birth in descending order:", sortedUsersByDOBDesc);





