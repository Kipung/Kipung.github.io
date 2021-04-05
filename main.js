const menu_button = document.querySelector('.navbar_menu_icon');
const menu = document.querySelector('.navigations');
const screen = window.matchMedia("(min-width:768px)");
const links = document.querySelector('.links');

menu_button.addEventListener('click', () => {
    menu.classList.toggle('active');
});




min_screen(screen);
screen.addListener(min_screen);








function min_screen(x) {
    if (x.matches&&menu.classList.toggle('active')) {
        menu.classList.toggle('active');
    }
}