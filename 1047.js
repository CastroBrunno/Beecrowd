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

let horas = 0;
let minutos = 0;


if (horaInicial < horaFinal) {
    let resultadoHoras = Math.abs(horaInicial - horaFinal);
    horas = resultadoHoras;
} else if (horaInicial > horaFinal) {
    let resultadoHoras = 24 - (horaInicial - horaFinal);
    horas = resultadoHoras;
}else{
    horas = 24
}


if (minutoInicial == minutoFinal) {
    minutos = 0;
} else {
    if (minutoInicial < minutoFinal) {
        let resultadoMinutos = Math.abs(minutoInicial - minutoFinal);
        minutos = resultadoMinutos;
    } else if (minutoInicial > minutoFinal) {
        let resultadoMinutos = 60 - (minutoInicial - minutoFinal);
        minutos = resultadoMinutos;
        horas--;
        if (resultadoMinutos >= 60) {
            horas++;
        }
    }
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);