var prompt = require('prompt-sync')();
// Solicita a entrada das duas notas para o usuário
var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));

// Calcula a média aritmética
var media = (nota1 + nota2) / 2;

// Exibe a média na tela
console.log("A nota obtida foi: " + media.toFixed(2) + "<br>");

// Verifica se a nota é maior ou menor que 6 e exibe o resultado correspondente
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}