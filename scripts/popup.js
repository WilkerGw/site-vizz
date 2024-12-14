// Seleciona o elemento que será clicado para fechar o popup
const closeButton = document.querySelector('.pop-fechar');

// Seleciona o container do popup
const popupContainer = document.querySelector('.popup__container');

// Adiciona um evento de clique ao botão de fechar
closeButton.addEventListener('click', () => {
    // Adiciona o estilo display: none ao container do popup
    popupContainer.style.display = 'none';
});