//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs');

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
//let [inicial, final] = lines.shift().split(" "); 
//console.clear();
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let valor = lines.shift();
valor = parseInt(valor);

var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;
var nota1 = 0

console.log(valor);

while (valor >= 100) {
    nota100++;
    valor = (valor - 100).toFixed(2)
}

while (valor >= 50) {
    nota50++;
    valor = (valor - 50).toFixed(2)
}

while (valor >= 20) {
    nota20++;
    valor = (valor - 20).toFixed(2)
}

while (valor >= 10) {
    nota10++;
    valor = (valor - 10).toFixed(2)
}

while (valor >= 5) {
    nota5++;
    valor = (valor - 5).toFixed(2)
}

while (valor >= 2) {
    nota2++;
    valor = (valor - 2).toFixed(2)
}

while (valor >= 1) {
    nota1++;
    valor = (valor - 1).toFixed(2);
}

	
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);
