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
let [codigo, quantidade] = lines.shift().split(" "); 
//console.clear();
//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let codigo = lines.shift();

if (quantidade == 0){

} else if(codigo == 1){
    codigo = parseFloat(4.00)
    let result = codigo * quantidade
    console.log("Total: R$ " + (result).toFixed(2))//cachorroQuente
} else if(codigo == 2){
    codigo = parseFloat(4.50)
    let result = codigo * quantidade
    console.log("Total: R$ " + (result).toFixed(2))//X-salada
}else if(codigo == 3){
    codigo = parseFloat(5.00)
    let result = codigo * quantidade
    console.log("Total: R$ " + (result).toFixed(2))//X-bacon
}else if(codigo == 4){
    codigo = parseFloat(2.00)
    let result = codigo * quantidade
    console.log("Total: R$ " + (result).toFixed(2))//Torrada
}else if(codigo == 5){
    codigo = parseFloat(1.50)
    let result = codigo * quantidade
    console.log("Total: R$ " + (result).toFixed(2))//Refrigerante
}