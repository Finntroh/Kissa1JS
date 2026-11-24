const asetukset = { teema: null, fonttikoko: 0 };

const teema = asetukset.teema ?? "vaalea";
const fonttikoko = asetukset.fonttikoko ?? 16;

console.log("Teema:", teema);
console.log("Fonttikoko:", fonttikoko);

console.log("|| teema:", asetukset.teema || "vaalea");
console.log("?? teema:", asetukset.teema ?? "vaalea");
console.log("|| fonttikoko:", asetukset.fonttikoko || 16);
console.log("?? fonttikoko:", asetukset.fonttikoko ?? 16);

// || käyttää oletusarvoa jos arvo on epätosi (false, 0, "", null, undefined)
// ?? käyttää oletusarvoa jos arvo on null tai undefined