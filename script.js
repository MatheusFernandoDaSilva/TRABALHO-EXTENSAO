function mostrarConteudo(numero) {
    // Oculta o conteúdo atualmente visível
    const conteudos = document.querySelectorAll('.conteudo-individual');
    conteudos.forEach((conteudo) => {
        conteudo.style.display = 'none';
    });

    // Remove a classe 'ativa' de todas as bolinhas
    const bolinhas = document.querySelectorAll('.bolinha');
    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove('ativa');
    });

    // Exibe o conteúdo correspondente
    document.getElementById(`conteudo${numero}`).style.display = 'block';

    // Adiciona a classe 'ativa' à bolinha clicada
    bolinhas[numero - 1].classList.add('ativa');
}
