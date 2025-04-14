let n1 = parseFloat(prompt(`Digite o primeiro número:`)); //Essa variavel armazena o n1
    
let n2 = parseFloat(prompt(`Digite o segundo número:`)); //Essa variavel armazena o n2

let n3 = parseFloat(prompt(`Digite o terceiro número:`)); //Essa variavel armazena o n3


let media = (n1 + n2 + n3) /3 ;//Essa variavel calcula a soma 

let mediaArredondada = media.toFixed(2); //Essa variavel calcula a média


alert(`A media aritmética é: ` + mediaArredondada); 
 
console.log (`O valor da soma é: ${media}`) //Essa descreve o resultado da média
