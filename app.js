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


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione o nome dos seus amigos antes de sortear');
        return;

    }
    let aleatorizar = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[aleatorizar];

    document.getElementById('resultado').innerHTML = `Seu amigo sorteado foi : ${sorteado}`;

}
