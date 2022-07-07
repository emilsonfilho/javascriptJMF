function saldo() {
    const formulario = document.getElementById('formulario')
    const compras = parseFloat(formulario.total.value);
    const valor = parseFloat(formulario.pagamento.value);

    if (valor < compras) {
        formulario.res.value = `O cliente está devendo ${(compras - valor).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`
    } else if ( compras < valor){
        formulario.res.value = `O cliente tem ${(valor - compras).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} de troco`
    } else {
        formulario.res.value = 'O cliente não recebe troco.'
    }
}