function calcular() {
    const formulario = document.getElementById('formulario');
    const resultado =document.getElementById('res');

    const b = Number(formulario.base.value);
    const h = Number(formulario.alt.value);
    const l = Number(formulario.larg.value);

    const totalParedes = (((b * h) * 2) + ((l * h) * 2)).toFixed(0);
    const totalpisoTeto = l * b;
    
    // SAIDA
    resultado.innerHTML = `<p>O piso tem ${totalpisoTeto}m²</p>`
    resultado.innerHTML += `<p>O teto tem ${totalpisoTeto}m²</p>`;
    resultado.innerHTML += `<p>A parede tem ${totalParedes}m² </p>`;
}
      
    
    
    