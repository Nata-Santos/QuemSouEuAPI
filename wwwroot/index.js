const iniciar = async () => {
    const itens = document.getElementById("itens");
    const response = await fetch('/QuemSouEuAPI');
    const result = await response.json();
    itens.innerHTML = result.nome;
    itens.innerHTML = `<a href="${nome.url}">${sobrenome.mensagem}</a>`;

}

document.addEventListener('DOMContentLoaded', iniciar);