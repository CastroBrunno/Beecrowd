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

let a = lines.shift();
let b = lines.shift();
let c = lines.shift();

switch (a) {
    case "vertebrado":
        switch (b) {
            case "ave":
                switch (c) {
                    case "carnivoro":
                        console.log("aguia")
                        break;
                
                    case "onivoro":
                        console.log("pomba")
                        break;
                }
                break;
        
            case "mamifero":
                switch (c) {
                    case "onivoro":
                        console.log("homem")
                        break;
                
                    case "herbivoro":
                        console.log("vaca")
                        break;
                }
                break;
        }
        break;
    case "invertebrado":
        switch (b) {
            case "inseto":
                switch (c) {
                    case "hematofago":
                        console.log("pulga")
                        break;
                
                    case "herbivoro":
                        console.log("largata")
                        break;
                }
                break;
        
            case "anelideo":
                switch (c) {
                    case "hematofago":
                        console.log("sanguessuga")
                        break;
                
                    case "onivoro":
                        console.log("minhoca")
                        break;
                }
                break;
        }
        break;
        break;
}