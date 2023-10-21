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
//let [inicial, final] = lines.shift().split(" "); 
//console.clear();
//para ler linhas com um unico valor na mesma linha use o comando a seguir


let repeticao = 1

while (repeticao == 1) {
   
    let notas
    let nota1 = 0
    let nota2 = 0
    let media = 0
    
    while (nota1 == 0 || nota2 == 0) {
        notas = lines.shift();
        notas = Number(notas)
        while (notas < 0 || notas > 10){
            console.log("nota invalida")
            notas = lines.shift();
            notas = Number(notas)
        }
        
    if (nota1 == 0){
        nota1 = notas
    }else if (nota2 == 0){
        nota2 = notas
    }
}

media = (nota1 + nota2) / 2
console.log(`media = ${media.toFixed(2)}`)
console.log("novo calculo (1-sim 2-nao)")
repeticao = lines.shift()

while (repeticao != 1 && repeticao != 2) {
    console.log("novo calculo (1-sim 2-nao)")
    repeticao = lines.shift()
}

}