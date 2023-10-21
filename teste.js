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

const NUMERO_DE_LEDS = [6,2,5,5,4,5,6,3,7,6]
let numero
let caracter

for (let repeticoes = 0; repeticoes < lines[0]; repeticoes++) {
    numero = lines[repeticoes + 1]
    let qtDeLeds = 0
    for (let i = 0; i < numero.length; i++) {
        caracter = numero[i]
        qtDeLeds += NUMERO_DE_LEDS[caracter]
    }
    console.log(qtDeLeds + " leds")
}