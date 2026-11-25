const tuotteet = [
  { nimi: "Kahvi", hinta: 3.5, kategoria: "juomat" },
  { nimi: "Tee", hinta: 2.9, kategoria: "juomat" },
  { nimi: "Pulla", hinta: 2.5, kategoria: "leivonnaiset" },
  { nimi: "Croissant", hinta: 3.2, kategoria: "leivonnaiset" },
];

const keskiarvo = tuotteet.reduce((sum, tuote) => sum + tuote.hinta, 0) / tuotteet.length;

console.log(keskiarvo.toFixed(2));