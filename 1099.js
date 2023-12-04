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

let numCasos = lines.shift();
let soma = 0
let temp = 0

for (let i = 0; i < numCasos; i++) {
    let [valor1, valor2] = lines.shift().split(" ");
    if (valor1 < valor2) {
        for (let i = valor1; i < valor2; i++) {
            if (temp == 0) {
                temp++
            } else if (i % 2 != 0) {
                soma += Number(i)
            }

        }
        console.log(soma)
        soma = 0
        temp = 0
    } else if (valor1 > valor2) {
        for (let i = valor2; i < valor1; i++) {
            if (temp == 0) {
                temp++
            } else if (i % 2 != 0) {
                soma += i
            }
        }
        console.log(soma)
        soma = 0
        temp = 0
    } else if(valor1 === valor2) {
        console.log(0)
        soma = 0
    }

}