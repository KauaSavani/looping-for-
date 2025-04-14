let largura = parseFloat(prompt(`Digite a largura do retângulo:`)); //Essa variavel armazena a largura do retângulo
    
let altura = parseFloat(prompt(`Digite a altura do retângulo:`)); //Essa variavel armazena a altura do retângulo
    
let area = parseFloat(largura * altura); // Calculo da area

console.log (`O valor da área do retângulo é: ${area} `); 

console.log(`O valor da área do retângulo é: ${area.toFixed(2)}`); // Valor final da area
