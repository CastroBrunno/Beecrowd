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
//let [inicial, final] = lines.shift().split(" "); 
//console.clear();
//para ler linhas com um unico valor na mesma linha use o comando a seguir

let salario = lines.shift();
salario = parseFloat(salario)

let percentual;
let ajuste;

if (salario <= 400.00) {
    percentual = 15;
} else if (salario <= 800.00) {
    percentual = 12;
} else if (salario <= 1200.00) {
    percentual = 10;
} else if (salario <= 2000.00) {
    percentual = 7;
} else {
    percentual = 4;
}

ajuste = parseFloat(salario * (percentual / 100)).toFixed(2);
let salarioFinal = parseFloat(salario + parseFloat(ajuste)).toFixed(2);

console.log(`Novo salario: ${salarioFinal}`);
console.log(`Reajuste ganho: ${ajuste}`);
console.log(`Em percentual: ${percentual} %`);
