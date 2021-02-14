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
const imgHover = (j) => {
    const imgDiv = document.querySelectorAll('.txt');
    const part1Img = document.querySelectorAll('.part1_img');
    part1Img[j].addEventListener('mouseover', () => {
        imgDiv[j].classList.add('img-hover');
    });
    part1Img[j].addEventListener('mouseout', () => {
        imgDiv[j].classList.remove('img-hover');
    });
}
for (j = 0; j < 4; j++) {
    imgHover(j);
}