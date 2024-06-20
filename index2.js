const userData = [
  {
    name: "Wahyu",
    continent: "Asia",
    country: "Indonesia",
    language: [
      { first_language: "Indonesian" },
      { second_language: "Sunda" },
      { local_language: "Javanese" }
    ],
    population: "20000"
  },
  {
    name: "John",
    continent: "Europe",
    country: "United Kingdom",
    language: [
      { first_language: "English" }
    ],
    population: "19500"
  },
  {
    name: "Maria",
    continent: "South America",
    country: "Brazil",
    language: [
      { first_language: "Portuguese" }
    ],
    population: "212559417"
  },
  {
    name: "Hiroshi",
    continent: "Asia",
    country: "Japan",
    language: [
      { first_language: "Japanese" }
    ],
    population: "126476461"
  },
  {
    name: "Anna",
    continent: "North America",
    country: "Canada",
    language: [
      { first_language: "English" },
      { second_language: "French" }
    ],
    population: "37742154"
  }
];

function findUserDataByContinent(continentToFind, dataToSearch) {

  const searchString = continentToFind.replace(/\s+/g, '');  //spasi , g=pola pertama
  const regexPattern = searchString.split('').join('.*');
  const regex = new RegExp(regexPattern, 'i');
  const result = dataToSearch.filter(item => {
    return regex.test(item.continent);
  });

  if (result.length === 0) {
    throw new Error('Benua tidak ditemukan dalam data.');
  }
  
  return result;
}

try {
 
  const continentResult = findUserDataByContinent("n orth", userData);
  console.log("Data pengguna berdasarkan benua:");
  console.log(JSON.stringify(continentResult, null, 1));
} catch (error) {
  console.error("Error:", error.message);
}


function findUserDataByCountry(countryToFind, dataToSearch) {
  // Menghapus semua spasi tambahan dari string pencarian
  const searchString = countryToFind.replace(/\s+/g, '');
  const regexPattern = searchString.split('').join('.*'); 
  const regex = new RegExp(regexPattern, 'i');
  const result = dataToSearch.filter(item => {  /// Memfilter data berdasarkan ekspresi reguler yang dibuat
    return regex.test(item.country);
  });

  if (result.length === 0) {
    throw new Error('Negara tidak ditemukan dalam data.');
  }
  
  return result;
}

try {
 
  const continentResult = findUserDataByCountry("indo nesia", userData);
  console.log("Data pengguna berdasarkan negara:");
  console.log(JSON.stringify(continentResult, null, 1));
} catch (error) {
  console.error("Error:", error.message);
}






//Cari data min max population

function findUserDataByPopulation(minPopulation, maxPopulation) {
  minPopulation = parseInt(minPopulation);
  maxPopulation = parseInt(maxPopulation);



  const result = [];
  userData.forEach(item => {
    if (item.population > minPopulation && item.population < maxPopulation) {
      result.push(item);
    }
  });

  if (result.length === 0) {
    throw new Error('Tidak ada negara yang memiliki populasi dalam rentang yang ditentukan.');
  }

  return result;
}

try {
  const populationResult = findUserDataByPopulation(19.000, 21000);
  console.log("Data pengguna berdasarkan rentang populasi:");
  console.log(JSON.stringify(populationResult, null, 1));
} catch (error) {
  console.error("Error:", error.message);}
// for each , bandingin data , 