const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const formulario = document.getElementById('formulario');
    const combustivel = document.getElementsByName('flexRadioDefault');
    
    const marca = formulario.marca.value;
    const modelo = formulario.modelo.value;
    const consumo =formulario.consumo.value;
    const abastecimento = Number(formulario.abastecimento.value);   
    const valorCombustivel = verificacao(combustivel);
    
    const kml = calculo(abastecimento, valorCombustivel, consumo);

    exibirResultadoNaTela(marca, modelo, kml, abastecimento);
})

function verificacao(combustivel) {
    for (let i = 0 ; i < combustivel.length ; i++) {
        if (combustivel[i].checked) {
            return combustivel[i].value
        }
    }
}

function calculo(abastecimento, valorCombustivel, consumo) {
    const kml = parseInt((abastecimento / valorCombustivel) * consumo);
    return kml
}

function exibirResultadoNaTela(marca, modelo, kml, abastecimento) {
    const resultado = document.querySelector('#res');
    resultado.innerHTML = `<p>O carro ${marca} ${modelo} andará ${kml} Km com um abastecimento de ${abastecimento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
}