'use strict'; // isso serve para que o navegador seja mais exigente com meu codigo e mostre mais erros que eu cometa
let texto = '';

 function camposValidos() {
    return document.getElementById('formulario').reportValidity();
}

function calcularIMC(altura, peso){
    return peso / (altura * altura);
}

function classificarImc(imc){
    
    if ( imc < 18.5){
        texto = " Você está abixo do peso";
   }else if (imc < 25){
        texto = " Você está no peso ideal MONSTROOOOOOO ";
   }else if(imc < 30){
       texto = " Você está um pouco acima do peso";
   }else if(imc <35){
       texto = " Você está com obesidade grau 1";
   }else if(imc <40){
       texto = " Você está com obesidade grau 2";
   }else{
       texto = " Você está com obesidade grau 3 CUIDADO";
   }
    return texto;
}

function mostrarResultado(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;// Com o Value ela pega a String
    const resultado = document.getElementById('resultado');// Sem o Value ela pega o Elemento HTML

    if(camposValidos(nome, altura, peso)){

    const imc = calcularIMC(altura, peso); 
    let texto = classificarImc (imc);   

    resultado.textContent = nome + " Seu Imc é: " + imc.toFixed(2) + texto;  
}else{
    resultado.textContent = "Preencha todas as caixas de texto para ser realizado o calculo do IMC!!! ";
}
}
// Aqui estamos pegando o botão calcular
document.getElementById('calcular').addEventListener('click', mostrarResultado)// Aqui estamos capiturando a ação do click no botão
