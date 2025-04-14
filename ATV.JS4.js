let reais = parseFloat(prompt(`Digite o valor em reais (R$):`)) // Essa variavel declara o valor em reais

let dolares = parseFloat (reais / 6); // Essa variavel declara o calculo de reais para dolares


console.log (`valor em dolares é : ` +dolares);

console.log (`valor em dolares é : ${dolares.toFixed(2)}`); // Essa variavel declara o valor em dolares
