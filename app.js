let amigos = [];


function adicionarAmigo() {
    const nomeAmigo = document.getElementById('nomeAmigo').value.trim();
    if (nomeAmigo === "") {
        alert("Insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
}


function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}
