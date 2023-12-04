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

let [valor1, valor2] = lines.shift().split(" ");
let vetor = []
let soma = 0

while (valor1 != 0 && valor2 != 0) {
    if (valor1 < valor2) {
        for (let i = valor1; i <= valor2; i++) {
            vetor.push(i);
            soma += Number(i);
        }
    } else {
        for (let i = valor2; i <= valor1; i++) {
            vetor.push(i);
            soma += Number(i);
        }
    }
    console.log(`${vetor.join(" ")} Sum=${soma}`);
    vetor = [];
    soma = 0;
    [valor1, valor2] = lines.shift().split(" ");
}