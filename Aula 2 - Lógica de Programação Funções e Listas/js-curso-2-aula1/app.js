// definição de variaveis;
let numerosSorteados = [];
let nmax = 100;

// Manipulação do HTML
let titulo = document.querySelector('h1');
titulo.innerHTML =  'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

// funções
function verificarChute(){
    console.log('Verificando chute...');
    let chute = document.querySelector('input').value;
    let numeroSecreto = 42;

    if(chute == numeroSecreto){
        alert('Parabéns, você acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{ 
        if(chute > numeroSecreto){
            alert('O número secreto é menor!');
        } else {
            alert('O número secreto é maior!');
        }
        limparCampo();
    }
}

//desafio 1
/*
let titulo = documento.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarChute(){
    console.log('o botão foi clicado');
    alert('Eu amo JS');
}
*/

//função com parametro
function exibirMensagemNaTela(tag, mensagem){
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}

//função com retorno
function gerarNumeroAleatorio(){
    let numeroSorteado = Math.round(Math.random() * nmax);
    if(numerosSorteados.includes(numeroSorteado)){
        gerarNumeroAleatorio();
    } else {
        if(numerosSorteados.length == nmax/2){
            numerosSorteados = [];
        }
        numerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

//desafio 2
/*fuction cumprimentar(nome){
    alert('Olá, ' + nome);
}

function dobro(numero){
    return numero * 2;
}

function media(num1, num2){
    return (num1 + num2) / 2;
}

funtion maior(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

function quadrado(number){
    return number * number;
}

*/

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}

// arrays
/*
let frutas = ['banana', 'maçã', 'uva', 'morango', 'abacaxi'];
console.log(frutas.length); // tamanho da lista
console.log(frutas[0]); // bananas
frutas.push('laranja'); // adiciona um elemento no final da lista
frutas.pop(); // remove o último elemento da lista
frutas.shift(); // remove o primeiro elemento da lista
*/