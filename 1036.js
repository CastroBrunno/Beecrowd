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

let [A, B, C] = lines.shift().split(" ");
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

var delta = Math.pow(B, 2) - 4 * A * C;

if (A == 0) {
    console.log("Impossivel calcular");
} else if (delta < 0) {
    console.log("Impossivel calcular");
} else {
    var r1 = (-B + Math.sqrt(delta)) / (2 * A);
    var r2 = (-B - Math.sqrt(delta)) / (2 * A);

    console.log(`R1 = ${(r1).toFixed(5)}`);
    console.log(`R2 = ${(r2).toFixed(5)}`);

}
