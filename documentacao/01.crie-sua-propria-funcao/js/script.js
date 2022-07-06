function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}

var btn = document.querySelector('button');
btn.onclick = function() {
    displayMessage('Sua caixa de entrada está quase cheia - delete algumas mensagens', 'warning');
    displayMessage('Bryan: Olá a todos, como vocês estão hoje?', 'chat');
}

/*
Se quisermos especificar parâmetros dentro de parênteses para a função que estamos
 chamando, então não podemos chamá-la diretamente — precisamos colocá-lo dentro de uma
  função anônima para que não fique no escopo imediato e, portanto, não seja chamado
   imediatamente. Agora ele não será chamado até que o botão seja clicado.
*/