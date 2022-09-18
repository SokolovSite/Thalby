const btnMenu = document.querySelector('.mobile-menu__btn');
const menu = document.querySelector('.mobile-menu__desc');
const closeMenu = document.querySelector('.close');


btnMenu.addEventListener('click', function() {
    console.log('click');
    menu.classList.toggle('display')
    btnMenu.classList.add ('open');
    closeMenu.classList.toggle('close')
})

closeMenu.addEventListener('click', function() {
    menu.classList.toggle('display')
    btnMenu.classList.remove ('open');
    closeMenu.classList.toggle('close')  
})