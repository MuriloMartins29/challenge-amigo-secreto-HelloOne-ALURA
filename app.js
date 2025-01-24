let amigos = [];

function adicionarAmigo() {
    try {
        const input = document.getElementById('amigo');
        const nome = input.value.trim();
        
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }
        
        amigos.push(nome);
        exibirAmigos();
        
        input.value = "";
    } catch (error) {
        console.error("Erro ao adicionar amigo:", error);
        alert("Ocorreu um erro ao adicionar o amigo.");
    }
}

function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        itemLista.classList.add('list-item');
        lista.appendChild(itemLista);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    if(amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos!");
        return;
    }
    
    const embaralhados = [...amigos];
    for (let i = embaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [embaralhados[i], embaralhados[j]] = [embaralhados[j], embaralhados[i]];
    }
    
    embaralhados.forEach((amigo, index) => {
        const sorteado = document.createElement('li');
        const proximoIndex = (index + 1) % embaralhados.length;
        sorteado.textContent = `${amigo} ➔ ${embaralhados[proximoIndex]}`;
        resultado.appendChild(sorteado);
    });
}