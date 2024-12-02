// Selecionar todas as imagens com a classe img__extra
const extraImages = document.querySelectorAll('.img__extra');

// Adicionar um event listener para cada imagem
extraImages.forEach(image => {
  image.addEventListener('click', () => {
    // Selecionar a imagem de destaque
    const destaqueImage = document.querySelector('.img__destaque');

    // Atualizar o src da imagem de destaque com o src da imagem clicada
    destaqueImage.src = image.src;
  });
});