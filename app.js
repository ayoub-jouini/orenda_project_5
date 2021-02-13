const nav_menu = ["Home", "New", "Clothes", "Shoes", "Accessories"];
function menuCreat(i) {
    var element = document.createElement("a");
    var node = document.createTextNode(nav_menu[i]);
    element.appendChild(node);
    var htmlElement = document.getElementById("menu");
    htmlElement.appendChild(element);
}
for (i = 0; i < 5; i++) {
    menuCreat(i);
}