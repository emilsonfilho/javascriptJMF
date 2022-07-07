function calcMedia() {
    const formulario = document.getElementById('formulario');
    const nota1 = Number(formulario.n1.value);
    const nota2 = Number(formulario.n2.value);
    const nota3 = Number(formulario.n3.value);
    const nota4 = Number(formulario.n4.value);
    // calculo da Media 
    const soma = nota1 + nota2 + nota3 + nota4;
    const media = (nota1 + nota2 + nota3 + nota4) / 4;  
    
    // SAÍDA 
    formulario.media.value = media;

    // ALERTA
    if (media >10) {
        alert ('Nota inválida')

    } else if (media >6){
        alert ('O aluno está aprovado!')
    } else if(media >=4){
        alert('O aluno não foi bem, mas terá outra chance!')
    } else {
        alert('O aluno está reprovado.')
    }
}