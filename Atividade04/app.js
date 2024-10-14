// 1
console.log("Seja bem vindo!");

// 2
let nome = "Letícia";
console.log(`Olá, ${nome}`)

// 
alert(`Olá, ${nome}`);

// 4 
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagem);

// 5
let valor1 = 3, valor2 = 5;

let resultadoSoma = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

// 6

let resultadoSubtracao = valor1 - valor2;
console.log(`A subtração entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}`);

// 7
let idade = prompt("Insira a sua idade");

if (idade >= 18) {
    alert("Você é menor de idade");
} else {
    console.log("Você é maior de idade");
}

// 8
numero = prompt("Digite um número positivo ou negativo");

if (numero > 0) {
    alert("Número positivo!");
} else if (numero < 0) {
    console.log("Número negativo!");
} else {
    console.log("O número é zero!");
}

// 9 
let cont = 1;

while (cont <= 10) {
    console.log(cont);
    cont++;
}

// 10
let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// 11
let numero = Math.random();
console.log(numero);

// 12
let numero1a10 = parseInts(Math.random() * 10) + 1;
console.log(numero1a10);

// 13
let numero1a1000 = parseInts(Math.random() * 1000) + 1;
console.log(numero1a1000);