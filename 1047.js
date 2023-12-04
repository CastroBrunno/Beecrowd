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

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(" ");

horaInicial = parseInt(horaInicial);
horaFinal = parseInt(horaFinal);
minutoInicial = parseInt(minutoInicial);
minutoFinal = parseInt(minutoFinal);

var totalMin = (minutoFinal-minutoInicial);
var totalHours = (horaFinal-horaInicial);
if (totalMin < 0) 
{
    totalMin += 60;
    totalHours--;
}
if (totalHours < 0) 
{
    totalHours+=24;
}
if (horaInicial == horaFinal && minutoInicial == minutoFinal) console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else console.log('O JOGO DUROU '+ totalHours + ' HORA(S) E ' + totalMin + ' MINUTO(S)');