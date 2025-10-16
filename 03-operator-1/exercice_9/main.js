
let patrimoineTotal = 60000000 + 40000000 + 20000000; // 120,000,000 CDF


let partPremiereCategorie = patrimoineTotal * 0.75;

let partDeuxiemeCategorie = patrimoineTotal * 0.25;

let partPaul = partPremiereCategorie / 3;


let partMarie = partPremiereCategorie / 3;

let partEric = (partPremiereCategorie / 3) / 2;

let partClaire = (partPremiereCategorie / 3) / 2;


let partMadameMukuna = partDeuxiemeCategorie / 3;

let partJoseph = partDeuxiemeCategorie / 3;


let partSarah = partDeuxiemeCategorie / 3;


console.log("=== HÉRITAGE DE MONSIEUR JEAN MUKUNA ===");
console.log("Patrimoine total:", patrimoineTotal.toLocaleString(), "CDF");
console.log("\n=== PREMIÈRE CATÉGORIE (75% de l'héritage) ===");
console.log("Paul:", partPaul.toLocaleString(), "CDF");
console.log("Marie:", partMarie.toLocaleString(), "CDF");
console.log("Éric:", partEric.toLocaleString(), "CDF");
console.log("Claire:", partClaire.toLocaleString(), "CDF");
console.log("\n=== DEUXIÈME CATÉGORIE (25% de l'héritage) ===");
console.log("Madame MUKUNA:", partMadameMukuna.toLocaleString(), "CDF");
console.log("Joseph:", partJoseph.toLocaleString(), "CDF");
console.log("Sarah:", partSarah.toLocaleString(), "CDF");

let totalDistribue = partPaul + partMarie + partEric + partClaire + partMadameMukuna + partJoseph + partSarah;
console.log("\n=== VÉRIFICATION ===");
console.log("Total distribué:", totalDistribue.toLocaleString(), "CDF");
console.log("Patrimoine total:", patrimoineTotal.toLocaleString(), "CDF");
console.log("Différence:", (patrimoineTotal - totalDistribue).toLocaleString(), "CDF");
