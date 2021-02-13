const nav_menu = ["Home", "New", "Clothes", "Shoes", "Accessories"];
function menuCreat(i) {
    var element = document.createElement("a");
    var node = document.createTextNode(nav_menu[i]);
    element.appendChild(node);
    var htmlElement = document.getElementsByClassName("menu")[0];
    htmlElement.appendChild(element);
}
for (i = 0; i < 5; i++) {
    menuCreat(i);
}
const navSlide = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.menu');
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    });
}
navSlide();