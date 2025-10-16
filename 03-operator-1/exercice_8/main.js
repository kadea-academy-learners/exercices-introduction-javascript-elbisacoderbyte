const salaireMensuel = 500;
const loyer = salaireMensuel * 0.30;
const nourriture = salaireMensuel * 0.20;
const transport = salaireMensuel * 0.10;
let autresDepenses = 50;
autresDepenses += 25;
const totalDepenses = loyer + nourriture + transport + autresDepenses;
const reste = salaireMensuel - totalDepenses;

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};
