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
let ddd = lines.shift();

switch (ddd) {
    case 61:
        console.log("Brasilia")
    break;

    case 71:
        console.log("Salvador")
    break;

    case 11:
        console.log("Sao Paulo")
    break;

    case 21:
        console.log("Rio de Janeiro")
    break;

    case 32:
        console.log("Juiz de Fora")
    break;

    case 19:
        console.log("Campinas")
    break;

    case 27:
        console.log("Vitoria")
    break;

    case 31:
        console.log("Belo Horizonte")
    break;

    default :
        console.log("DDD nao cadastrado")
    break;
}