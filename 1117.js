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

let avaliacao1 = 0
let avaliacao2 = 0

let notaAvaliacao1
let notaAvaliacao2
let media
let nota

while (avaliacao1 == 0 || avaliacao2 == 0){
    nota = lines.shift();
    if (avaliacao1 == 0) {
        if (nota >= 0 && nota <= 10) {
            avaliacao1++
            notaAvaliacao1 = Number(nota)
        }else{
            console.log("nota invalida")
        }
        
    }else if (avaliacao2 == 0){
        if (nota >= 0 && nota <= 10) {
            avaliacao2++
            notaAvaliacao2 = Number(nota)
        }else{
            console.log("nota invalida")

        }
    }


}

media = (notaAvaliacao1 + notaAvaliacao2) / 2
console.log(`media = ${media}`)
