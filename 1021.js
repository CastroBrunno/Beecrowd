var prompt = require('prompt-sync')();
//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//console.clear();
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let codigo = lines.shift();

let N = parseFloat(lines[0]).toFixed(2);
N = parseFloat(N)
var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;

var moeda1 = 0;
var moeda50 = 0;
var moeda25 = 0;
var moeda10 = 0;
var moeda5 = 0;
var moeda1Cent = 0;

while (N >= 100) {
    nota100++;
    N = (N - 100).toFixed(2)
}

while (N >= 50) {
    nota50++;
    N = (N - 50).toFixed(2)
}

while (N >= 20) {
    nota20++;
    N = (N - 20).toFixed(2)
}

while (N >= 10) {
    nota10++;
    N = (N - 10).toFixed(2)
}

while (N >= 5) {
    nota5++;
    N = (N - 5).toFixed(2)
}

while (N >= 2) {
    nota2++;
    N = (N - 2).toFixed(2)
}

//Moedas

while (N >= 1) {
    moeda1++;
    N = (N - 1).toFixed(2)
}


while (N >= 0.50) {
    moeda50++;
    N = (N - 0.50).toFixed(2)
}

while (N >= 0.25) {
    moeda25++;
    N = (N - 0.25).toFixed(2)
}


while (N >= 0.10) {
    moeda10++;
    N = (N - 0.10).toFixed(2)
}


while (N >= 0.05) {
    moeda5++;
    N = (N - 0.05).toFixed(2)
}


while (N >= 0.01) {
    moeda1Cent++;
    N = (N - 0.01).toFixed(2)
}

console.log("NOTAS:")
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log("MOEDAS:")
console.log(`${moeda1} moeda(s) de R$ 1.00`);
console.log(`${moeda50} moeda(s) de R$ 0.50`);
console.log(`${moeda25} moeda(s) de R$ 0.25`);
console.log(`${moeda10} moeda(s) de R$ 0.10`);
console.log(`${moeda5} moeda(s) de R$ 0.05`);
console.log(`${moeda1Cent} moeda(s) de R$ 0.01`);

