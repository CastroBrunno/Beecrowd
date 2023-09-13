var NUMBER = parseInt(lines[0]);
var numHoras = parseInt(lines[1]);
var valorPorHora = parseFloat(lines[2]);
var SALARY = (numHoras * valorPorHora).toFixed(2);
console.log("NUMBER = " + NUMBER);
console.log("SALARY = U$ " + SALARY);