let media = 0;

function calculo() {
    const formulario = document.getElementById('formulario');
    let parcial = Number(formulario.parcial.value);
    let global = Number(formulario.global.value);

    const radio = document.getElementById('regular');
    
    
    // const media = parcial + global / 2;
    let valormedia = 0;
    if (radio.checked) {
         valormedia = calcMedia(parcial, global);
    } else {
        if (parcial < 6) {
            parcial = 1;
        } 
        if (global < 6) {
            global = 1;
        }
        valormedia = calcMedia(parcial, global);
    }
    verificacaoMedia(valormedia);
    
}


function calcMedia(parcial, global) {
    media = (parcial + global) / 2;
    return media
}

function verificacaoMedia(valormedia){
    if (valormedia > 10) {
        alert('Nota invalida')
    } else if (valormedia >= 6) {
        alert(`Aluno aprovado com média ${valormedia}`)
    } else {
        alert(`Aluno reprovado com média ${valormedia}`)
    }
}
