const tuotteet = [
  { nimi: "Kahvi", hinta: 3.5, kategoria: "juomat" },
  { nimi: "Tee", hinta: 2.9, kategoria: "juomat" },
  { nimi: "Pulla", hinta: 2.5, kategoria: "leivonnaiset" },
  { nimi: "Croissant", hinta: 3.2, kategoria: "leivonnaiset" },
  { nimi: "Maito", hinta: 1.8, kategoria: "juomat" },
  { nimi: "Mehu", hinta: 2.2, kategoria: "juomat" },
  { nimi: "Donitsi", hinta: 2.7, kategoria: "leivonnaiset" },
  { nimi: "Korvapuusti", hinta: 3.1, kategoria: "leivonnaiset" },
];

const KalliitTuotteet = tuotteet.map(tuote => ({
  ...tuote,
  hinta: (tuote.hinta * 1.1).toFixed(2)
}));

console.table(KalliitTuotteet);
console.table(tuotteet);