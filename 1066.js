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


let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let d = Number(lines.shift());
let e = Number(lines.shift());

let qtdePares = 0
let qtdeImpares = 0
let qtdePositivos = 0
let qtdeNegativos = 0

ehPar(a);
ehPar(b);
ehPar(c);
ehPar(d);
ehPar(e);

ehPositivo(a);
ehPositivo(b);
ehPositivo(c);
ehPositivo(d);
ehPositivo(e);

console.log(`${qtdePares} valor(es) par(es)`);
console.log(`${qtdeImpares} valor(es) impar(es)`);
console.log(`${qtdePositivos} valor(es) positivo(s)`);
console.log(`${qtdeNegativos} valor(es) negativo(s)`);


function ehPar(value){
    if(value % 2 === 0){
        qtdePares++
    } else if (value != 0){
        qtdeImpares++
    }
}

function ehPositivo(value){
    if(value > 0){
        qtdePositivos++
    } else if( value < 0){
        qtdeNegativos++
    }
}
