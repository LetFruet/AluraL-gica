// 1
dia = prompt('Qual é o dia da semana?');

if (dia == 'Sábado' || dia == "Domingo") {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 2 
numero = prompt('Digite um número positivo ou negativo');

if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// 3
pontuacao = 520;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// 4 
let saldo = 2500; 
alert(`Seu saldo é R$${saldoConta}.`);

// 5
let nome = prompt('Qual o seu nome?');
alert(`Olá ${nome}`);