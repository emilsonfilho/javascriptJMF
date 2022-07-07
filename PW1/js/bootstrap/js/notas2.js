const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const formulario = document.getElementById('formulario');
    const radio = document.getElementById('regular');
    const tec = document.getElementById('tecnico');
    let parcial = Number(formulario.parcial.value);
    let global = Number(formulario.global.value);
    let media = 0;
    let valormedia = 0;
    
    valormedia = verificacaoRadioChecado(radio, valormedia, media, parcial, global, tec);
    verificacaoMedia(valormedia);
})

function verificacaoRadioChecado(radio, valormedia, media, parcial, global, tec) {
    if (radio.checked) {
        valormedia = calcMedia(media, parcial, global);
        return valormedia;
   } else if (tec.checked) {
       if (parcial < 6) {
           parcial = 1;
       } 
       if (global < 6) {
           global = 1;
       }
       valormedia = calcMedia(media, parcial, global);
       return valormedia;
   } else {
       alert('Selecione um eixo');
   }
}

function calcMedia(media, parcial, global) {
    media = (parcial + global) / 2;
    return media;
}

function verificacaoMedia(valormedia){
    if (valormedia > 10) {
        alert('Nota invalida');
    } else if (valormedia >= 6) {
        alert(`Aluno aprovado com média ${valormedia}`);
    } else {
        alert(`Aluno reprovado com média ${valormedia}`);
    }
}

