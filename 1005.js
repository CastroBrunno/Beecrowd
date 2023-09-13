const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let variavel1 = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
//let variavel2 = parseFloat(lines[1]);

console.log(variavel1)
