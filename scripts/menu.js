const menuIcon = document.querySelector('.header__icone__menu');
const closeIcon = document.querySelector('.header__icone__fechar');
const mainMenu = document.querySelector('.header__menu__principal');
const header = document.querySelector('header');
const logoHeader = document.querySelector ('.header__logo')

menuIcon.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  closeIcon.style.display = 'flex';
  menuIcon.style.display = 'none';
  logoHeader.style.display = 'none'
});

closeIcon.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'flex';
  logoHeader.style.display = 'flex'

});

header.addEventListener('click', (event) => {
  if (!event.target.closest('.header__menu__principal') && !event.target.closest('.header__icone__menu')) {
    mainMenu.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});