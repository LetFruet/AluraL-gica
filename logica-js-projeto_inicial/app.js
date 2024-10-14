// mensagem para o usuário em forma de alerta
alert("Boas vindas ao jogo do Número Secreto");

// criando a variável número
// criando a variável número
// parseInt = pega o valor inteiro
// Math.random() = gera um número aleatório entre 0 e 1 (inclindo estes) 
// * 10 = valores de 1 e 99 + 1
let valorMax = 100, numeroSecreto = parseInt(Math.random() * valorMax + 1), chute, tentativas = 1, palavraTentativa;

// printando o valor no console
// console.log(numeroSecreto);

// comparando dois valores 
while (chute != numeroSecreto) {

    // abrindo uma caixa de entrada e criando uma variável para armazenar o valor escolhido pelo usuário
    chute = prompt(`Escolha um número entre 1 e ${valorMax}`);

    if (chute == numeroSecreto) {
        // criando uma mensagem visualizada em "Inspecionar" > "Console"
        // console.log("Isso aí! Você descobriu o número secreto (5)"); 
        // alert("Isso aí! Você descobriu o número secreto " + numeroSecreto); 
        // Template Strings:

        //parado todo laço de repetição quando o valor for acertado 
        break;
        alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

// Operador ternário
// Se "tentativas" for maior que 1, escreve tentativaS, senão tentativA
palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/* if (tentativas > 1) {
    alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
} */