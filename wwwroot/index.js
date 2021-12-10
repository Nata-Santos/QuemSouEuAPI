const iniciar = async () => {
    const itens = document.getElementById("itens");
    const response = await fetch('/QuemSouEuAPI');
    const result = await response.json();

    itens.innerHTML = `<p>Nome: ${result.nome}</p> 
    <p>Sobrenome: ${result.sobrenome}</p>
    <p>User GitHub: ${result.gitHub}</p>`
    

}

document.addEventListener('DOMContentLoaded', iniciar);