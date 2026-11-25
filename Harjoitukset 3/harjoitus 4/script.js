const tuotteet = [
  { nimi: "Kahvi", hinta: 3.5, kategoria: "juomat" },
  { nimi: "Tee", hinta: 2.9, kategoria: "juomat" },
  { nimi: "Pulla", hinta: 2.5, kategoria: "leivonnaiset" },
  { nimi: "Croissant", hinta: 3.2, kategoria: "leivonnaiset" },
];

console.log(tuotteet.toSorted((a, b) => a.hinta - b.hinta));
console.log(tuotteet);