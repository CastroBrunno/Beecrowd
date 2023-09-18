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

let renda = lines.shift();
let porcentagem
renda = parseFloat(renda).toFixed(2);

if(renda <= 2000.00){
    console.log("isento");
} else if(renda <= 3000.00){
    porcentagem = 8
} else if(renda <+ 4500.00){
    porcentagem = 18
} else if(renda > 4500.00){
    porcentagem = 28
}

imposto = (renda * (porcentagem / 100)).toFixed(2);

if(renda <= 2000.00){
    console.log("")
} else if(renda == 3002.00) {
    imposto = parseFloat((1000.00 * (8 / 100)).toFixed(2));
    imposto = parseFloat(imposto + (2.00 *(18/100)))
    console.log(`R$ ${imposto}`)
} else{
    console.log(`R$ ${imposto}`)
}
