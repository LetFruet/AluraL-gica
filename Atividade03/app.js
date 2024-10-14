// 1
let cont1 = 1;

while (cont1 <= 10) {
    console.log("Contador: " + cont1);
    cont1++;
}

// 2
let cont2 = 10;

while (cont2 >= 0) {
    console.log("Contador: " + cont2);
    cont2--;
}

// 3
let cont3 = prompt("Insira um valor a ser decrementado");

while (cont3 >= 0) {
    console.log("Contador: " + cont3);
    cont3--;
}

// 4
let cont4 = 0, numero = prompt("Insira um valor a ser incrementado");

while (cont4 <= numero) {
    console.log("Contador: " + cont4);
    cont4++;
}