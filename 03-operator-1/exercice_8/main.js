// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = salaireMensuel * 0.30;
let nourriture = salaireMensuel * 0.20;
let transport = salaireMensuel * 0.10;
let autresDepenses = 50;
autresDepenses = autresDepenses + 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

console.log("Salaire mensuel:", salaireMensuel);
console.log("Loyer (30%):", loyer);
console.log("Nourriture (20%):", nourriture);
console.log("Transport (10%):", transport);
console.log("Autres dépenses:", autresDepenses);
console.log("Total des dépenses:", totalDepenses);
console.log("Reste:", reste);
