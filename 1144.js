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

let repeticao = lines.shift();
let j
let coluna1 = 0

let coluna2 = 0
let soma2 = -1
let cont = 1

let coluna3 = 0
let soma3 = -1
let somaColuna3 = 6
let somaColuna3DoMeio = 5







for (let i = 0; i < (repeticao); i++) {
    j = 0
    coluna1++
    if (i > 1) {
        soma2 += i + cont
        cont++
    }else{
        soma2 += 1
    }

    if (i > 0) {
        somaColuna3 += 6
        somaColuna3DoMeio += coluna3 + somaColuna3
        coluna3 += somaColuna3DoMeio
    }else{
        coluna3++
    }



    coluna2 += soma2
    for (j = 0; j < 2; j++) {
        soma2++
        soma3++
        coluna2 = + soma2
        coluna3 += soma3
        console.log(coluna1, coluna2, coluna3)
        soma3 = 0
        
    }
    
}
