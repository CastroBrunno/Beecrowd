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

let lerValores = []
let temp = ""
let soma = 0
let tabelaAscii = ""
let rato = 0
let sapo = 0
let coelho = 0
let totalRatos = 0
let totalSapos = 0
let totalCoelhos = 0

for (let i = 0; i < lines[0]; i++){
    lerValores = lines[i + 1]
    temp = ""
    soma = 0
   

    let invertido = lerValores.split('').reverse().join('')
    if(invertido[0] == "R"){
        rato++
        for(let j = 0; j < lerValores.length; j++){
            if (!isNaN(lerValores.charAt(j))) { // Verifica se o caractere é um número
                temp += lerValores.charAt(j)
                
            }
            
        }
    
        soma += Number(temp)
        totalRatos = soma * rato
        temp = ""
        soma = 0

    }else if(invertido[0] == "S"){
        sapo++
        for(let j = 0; j < lerValores.length; j++){
            if (!isNaN(lerValores.charAt(j))) { // Verifica se o caractere é um número
                temp += lerValores.charAt(j)
                
            }
            
        }
    
        soma += Number(temp)
        totalSapos = soma * sapo
        temp = ""
        soma = 0

    }else if (invertido[0] == "C"){
        coelho++
        for(let j = 0; j < lerValores.length; j++){
            if (!isNaN(lerValores.charAt(j))) { // Verifica se o caractere é um número
                temp += lerValores.charAt(j)
                
            }
            
        }
    
       soma += Number(temp)
        totalCoelhos = soma * coelho
        temp = ""
        soma = 0

    }
    
}

console.log(`Total: ${totalCoelhos + totalRatos + totalSapos} cobaias`)
console.log(`Total de coelhos: ${totalCoelhos}`)
console.log(`Total de ratos: ${totalRatos}`)
console.log(`Total de sapos: ${totalSapos}`)

