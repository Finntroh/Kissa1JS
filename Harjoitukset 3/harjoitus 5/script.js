const tuotteet = [
  { nimi: "Kahvi", hinta: 3.5, kategoria: "juomat" },
  { nimi: "Tee", hinta: 2.9, kategoria: "juomat" },
  { nimi: "Pulla", hinta: 2.5, kategoria: "leivonnaiset" },
  { nimi: "Croissant", hinta: 3.2, kategoria: "leivonnaiset" },
];

const ryhmat = Object.groupBy(tuotteet, tuote => tuote.kategoria);

for (const [kategoria, ryhma] of Object.entries(ryhmat)) {
  console.log(kategoria, ryhma.length, "tuotetta");
}

