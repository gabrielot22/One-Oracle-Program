//mostrar mensagem no console
alert("Boas Vindas ao Curso de Lógica de Programação");

//Variáveis
let numeroSecreto = 33;

//input do usuário e armazenamento
let num_chute = prompt("Digite um número entre 1 e 50");

//condicional
if (numeroSecreto == num_chute) {
    alert("Parabéns, você acertou o número secreto " + numeroSecreto)+"!";
}
// outra possibilidade seria `Parabens, você acertou o número secreto ${numeroSecreto}!`
else{
    alert("Que pena, você errou o número secreto!\n Tente novamente!");
}
