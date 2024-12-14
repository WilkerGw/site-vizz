// Selecionando os elementos relevantes
const menus = document.querySelectorAll('.header__menu__principal li');
const subMenus = document.querySelectorAll('.header__menu__sol, .header__menu__grau, .header__info__legais');

// Função para mostrar/esconder o sub-menu
function toggleSubMenu(event) {
  const target = event.target;
  const subMenu = target.nextElementSibling;

  // Remover a classe "active" de todos os sub-menus
  subMenus.forEach(menu => menu.classList.remove('active'));

  // Adicionar a classe "active" ao sub-menu clicado
  if (subMenu) {
    subMenu.classList.toggle('active');
  }
}

// Adicionando o evento de clique a cada item do menu principal
menus.forEach(menu => {
  menu.addEventListener('click', toggleSubMenu);
});

// Função para fechar todos os sub-menus ao clicar fora deles
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header__menu__principal')) {
    subMenus.forEach(menu => menu.classList.remove('active'));
  }
});