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

let [N1, N2, N3, N4] = lines.shift().split(" ");
N1 = parseFloat(N1);
N2 = parseFloat(N2);
N3 = parseFloat(N3);
N4 = parseFloat(N4);
let exame = lines.shift();
exame = parseFloat(exame);

let media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log(`Media: ${(media).toFixed(1)}`);

if(media >= 7.0){
    console.log("Aluno aprovado");
}else if(media < 5.0){
    console.log("Aluno reprovado");
}else{
    console.log("Aluno em exame");
    console.log(`Nota do exame: ${(exame).toFixed(1)}`);
    let mediaExame = (exame + media) / 2;
    if (mediaExame >= 5.0){
        console.log("Aluno aprovado");
        console.log(`Media final: ${(mediaExame).toFixed(1)}`);
    }else if(mediaExame <= 4.9){
        console.log("Aluno reprovado");
        console.log(`Media final: ${(mediaExame).toFixed(1)}`);
    }
}

