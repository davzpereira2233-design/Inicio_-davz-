const rls = require("readline-sync")
let n1 = 0
let n2 = 0

function leitura(){
    n1 = rls.questionFloat("Digite a primeira nota: ")
    n2 = rls.questionFloat("Digite a segunda nota: ")
}

function media(num1, num2){
    let soma = (num1 + num2)
    return soma / 2
}

function principal(){
    leitura()
    let resposta = media(n1, n2)
     console.log(`A média do aluno é: ${resposta}`)
}
principal()