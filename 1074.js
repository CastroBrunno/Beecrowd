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
//let codigo = lines.shift();


let frase

for (let i = 0; i < lines[0]; i++){
    let valor = lines[i + 1]

    if( ehPar(valor) == true){
        frase = "EVEN"
    }else if( ehPar(valor) == false){
        frase = "ODD"
    }

    if (ehPositivo(valor) === 0){
        frase = "NULL"
    }else if(ehPositivo(valor) == true){
        frase += " POSITIVE"
    }else{
        frase += " NEGATIVE"
    }

    console.log(frase)
}

function ehPar(valor){
    if(valor % 2 == 0){
        return true
    }else{
        return false
    }
}

function ehPositivo(valor){
    if(valor > 0){
        return true
    }else if(valor < 0){
        return false
    }else{
        return 0
    }
}