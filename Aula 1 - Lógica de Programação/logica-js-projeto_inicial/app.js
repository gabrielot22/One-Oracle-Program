//mostrar mensagem no console
alert("Boas Vindas ao Curso de Lógica de Programação");

//Variáveis
let numeroSecreto = 33;
let tentativas = 1;
//input do usuário e armazenamento
let num_chute = prompt("Digite um número entre 1 e 50");

//condicional
if (numeroSecreto == num_chute) {
    alert("Parabéns, você acertou o número secreto " + numeroSecreto)+"!";
}
// outra possibilidade seria `Parabens, você acertou o número secreto ${numeroSecreto}!`
else{
    if(numeroSecreto>num_chute){
    alert("Que pena, você errou o número secreto eh maior!\n Tente novamente!");
    }
    else{
    alert("Que pena, você errou o número secreto eh menor!\n Tente novamente!");             
    }
    tentativas++;
}

//loops - while
while(numeroSecreto != num_chute){
    chute = prompt("Digite um novo número entre 1 e 50");
    num_chute = prompt("Digite um número entre 1 e 50");
    if (numeroSecreto == num_chute) {
        break;
        }
    else{
        if(numeroSecreto>num_chute){
        alert("Que pena, você errou o número secreto eh maior!\n Tente novamente!");
        }
        else{
        alert("Que pena, você errou o número secreto eh menor!\n Tente novamente!");             
        }
        tentativas++;
    }
}
if(tentativas==1)
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} chute!`);
else
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} chutes!`);
    
// operator ternário - ? é uma outra possibilidade de fazer a mesma coisa
let palavraTentativas = tentativas == 1 ? "tentativa" : "tentativas";

// math random() - gera um número aleatório
// math round() - arredonda o número
numeroSecreto = Math.round(Math.random() * 50);