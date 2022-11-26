// ------- Hora do dia ------------

let hora = 11

if (hora<=12) {
    console.log("Bom dia!")

}   else if(hora > 12 && hora < 18){ 
    console.log("Boa tarde!")

} else {
    console.log("Boa noite!")
}

console.log()
console.log("====================")
console.log()

// ------------------------------------ entrada ma balada
// se tiver mais que 18 => pode entrar
// se tiver menos que 18 => vai para casa bebe
// se tiver mais que 60 => aqui não é o baile de terceira idade

let idade = 70

if(idade<18){
    console.log("Vai para casa!")

} else if (idade>=18 && idade < 60) {
    console.log("Pode entrar")
} else {
    console.log("Aqui não é o baile de terceira idade")
}


//------------------------------- Aposentadoria de homens
// Regra 01 (Idade) =>ter 62 anos e 15 de contribuição
// Regra 02 (Tempo de serviço) => ter 35 anos de contribuição

let Tempo_de_contribuição = parseInt(prompt("Informe o tempo de contribuição:"))
let i = parseInt(prompt("Informe sua idade:"))

if (Tempo_de_contribuição >= 35){
    alert("Parabéns, você terá a aposentadoria!")
} if (i >= 62 && Tempo_de_contribuição >= 15){
    alert("Parabéns, aposentado!")

} else {
    alert ("Você não poderá obter a aposentadoria")

}




// --------------------- Entrada na balada 2

let idadeB = 17
let mensagem = (idadeB>=18) ? "Pode entrar": "Vaza"
console.log(mensagem) 



