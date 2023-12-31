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

let casos = Number(lines.shift());
let ratos = 0
let sapos = 0
let coelhos = 0
let total = 0

for (let i = 0; i < casos; i++) {
    let [quantidade, valor] = lines.shift().split(" ");
    if (valor == "C"){
        coelhos += parseInt(quantidade)  
    } 
    else if (valor == "R") {
        ratos += parseInt(quantidade)
    } 
    else {sapos += parseInt(quantidade)} 
}

total = (coelhos + ratos + sapos);
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos / total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos / total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos / total) * 100).toFixed(2)} %`);

