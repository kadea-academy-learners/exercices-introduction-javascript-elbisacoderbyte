let ageEnfant = 10;
let agePère = ageEnfant * 2;
let ageMère = agePère - 5;
let ageGrandPère = (ageMère * 2) + (ageEnfant / 2);
let ageOncle = agePère + 10;

console.log("Âge de l'enfant:", ageEnfant);
console.log("Âge du père:", agePère);
console.log("Âge de la mère:", ageMère);
console.log("Âge du grand-père:", ageGrandPère);
console.log("Âge de l'oncle:", ageOncle);

module.exports = { ageEnfant, agePere: agePère, ageMere: ageMère, ageGrandPere: ageGrandPère, ageOncle };
