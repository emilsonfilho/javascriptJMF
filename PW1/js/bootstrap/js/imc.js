function calcImc() {
    /* Verificar o id do formulário para cálculo do IMC */ 
    const formulario = document.getElementById('formulario');
    //const peso = document.querySelector('#kg').value;
    // declara as variaveis de captura de dados do formulario
    const peso = formulario.kg.value;
    const altura = formulario.altura.value;
    const imc = peso / Math.pow(altura, 2);
    // Enviar valor(calculo) ao input imc
    
    formulario.resultado.value = imc.toFixed(2);
    
    // condição de classificação
if(imc < 17){
    alert('Magro');
} else if ((imc >= 17) && (imc < 25)) {
   alert('Normal');
} else if ((imc >= 25) && (imc < 30)) {
    alert('Sobrepeso');
} else if ((imc >= 30) && (imc < 35)){
   alert('Obesidade Grau I');
} else if((imc >= 35) && (imc < 40)){
    alert('Obesidade Grau II');
} else {
    alert('Obesidade Grau III');
}
}
// Formas de elevar um número no JS
// console.log(altura ** 2);
// console.log(Math.pow(altura, 2));
// console.log(altura * altura);



