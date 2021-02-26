// nav-bar
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

// part-1

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

// part-2

let clothes = [
    {
        "id": 1,
        "category": "jeans",
        "name": "Ripped jeans",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
        "size": "XL",
        "color": "blue",
        "price": 20.99
    },
    {
        "id": 2,
        "category": "jeans",
        "name": "Boyfriend jeans",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
        "size": "S",
        "color": "blue",
        "price": 24.99
    },
    {
        "id": 3,
        "category": "shirts",
        "name": "Ripped sweatshirt",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
        "size": "XL",
        "color": "white",
        "price": 29.99
    },
    {
        "id": 4,
        "category": "jackets",
        "name": "Denim Jacket",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
        "size": "M",
        "color": "grey",
        "price": 40.99
    },
    {
        "id": 5,
        "category": "shirts",
        "name": "Longsleeve",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
        "size": "L",
        "color": "black",
        "price": 120.99
    },
    {
        "id": 6,
        "category": "jeans",
        "name": "Ripped jeans",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
        "size": "XL",
        "color": "blue",
        "price": 20.99
    },
    {
        "id": 7,
        "category": "jeans",
        "name": "Boyfriend jeans",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
        "size": "S",
        "color": "blue",
        "price": 24.99
    },
    {
        "id": 8,
        "category": "shirts",
        "name": "Ripped sweatshirt",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
        "size": "XL",
        "color": "white",
        "price": 29.99
    },
    {
        "id": 9,
        "category": "jackets",
        "name": "Denim Jacket",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
        "size": "M",
        "color": "grey",
        "price": 40.99
    },
    {
        "id": 10,
        "category": "shirts",
        "name": "Longsleeve",
        "image": "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
        "size": "L",
        "color": "black",
        "price": 120.99
    }
];
function jeantArt() {
    var artc = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    artc.setAttribute("class", "artc");
    div1.setAttribute("class", "artc-img");
    div2.setAttribute("class", "artc-txt");
    artc.appendChild(div1);
    artc.appendChild(div2);
    var htmlArtc = document.getElementById("prod-div");
    htmlArtc.appendChild(artc);
}
function artcTxt(x) {
    var name = document.createElement("div");
    var colSiz = document.createElement("div");
    var price = document.createElement("div");
    var btn = document.createElement("div");
    name.setAttribute("class", "name");
    colSiz.setAttribute("class", "col-siz");
    price.setAttribute("class", "price");
    btn.setAttribute("class", "artc-btn");
    var htmlTxt = document.getElementsByClassName("artc-txt")[x];
    htmlTxt.appendChild(name);
    htmlTxt.appendChild(colSiz);
    htmlTxt.appendChild(price);
    htmlTxt.appendChild(btn);
}
function artcLast(v) {
    var siz = document.createElement("h3");
    var color = document.createElement("div");
    var btn = document.createElement("button");
    color.setAttribute("class", "color");
    siz.setAttribute("class", "siz");
    var btnNode = document.createTextNode("More details");
    var htmlColSiz = document.getElementsByClassName("col-siz")[v];
    var htmlBtn = document.getElementsByClassName("artc-btn")[v];
    htmlColSiz.appendChild(siz);
    btn.appendChild(btnNode);
    htmlColSiz.appendChild(color);
    editMenu(v);
    htmlBtn.appendChild(btn);
}
function range(k) {
    var siz = document.getElementsByClassName("siz")[k];
    var color = document.getElementsByClassName("color")[k];
    var price = document.getElementsByClassName("price")[k];
    var artcImg = document.getElementsByClassName("artc-img")[k];
    var name1 = document.getElementsByClassName("name")[k];
    var nameH = document.createElement("h2");
    var artcImgI = document.createElement("img");
    var nameNode = document.createTextNode(clothes[k].name);
    var colorNode = document.createTextNode(clothes[k].color);
    color.appendChild(colorNode);
    nameH.appendChild(nameNode);
    name1.appendChild(nameH);
    var sizNode = document.createTextNode(clothes[k].size);
    siz.appendChild(sizNode);
    var priceNode = document.createTextNode(clothes[k].price);
    price.appendChild(priceNode);
    artcImgI.setAttribute("class", "img-part2");
    artcImgI.setAttribute("src", clothes[k].image);
    artcImg.appendChild(artcImgI);
}
function editMenu(v) {
    htmlBtn = document.getElementsByClassName("artc-btn")[v];
    var editBtn = document.createElement("img");
    editBtn.setAttribute("src", "icons/three dots.svg");
    editBtn.setAttribute("class", "three-dots-icon");
    var editMenuDiv = document.createElement("div");
    var menuEditBtn = document.createElement("div");
    var menuDeleteBtn = document.createElement("div");
    var menuEditBtnNode = document.createTextNode("Edit");
    var menuDeleteBtnNode = document.createTextNode("Delete");
    menuEditBtn.appendChild(menuEditBtnNode);
    menuDeleteBtn.appendChild(menuDeleteBtnNode);
    editMenuDiv.appendChild(menuEditBtn);
    editMenuDiv.appendChild(menuDeleteBtn);
    editMenuDiv.setAttribute("class", "edit-menu");
    htmlBtn.appendChild(editMenuDiv);
    htmlBtn.appendChild(editBtn);
}
for (k = 0; k < clothes.length; k++) {
    jeantArt();
    artcTxt(k);
    artcLast(k);
    range(k);
}
function addArtcBtn() {
    var addBtn = document.createElement("div");
    var addBtndiv = document.createElement("div");
    var addBtnNode = document.createTextNode("add");
    addBtn.setAttribute("class", "add-btn");
    var htmlArtc = document.getElementById("prod-div");
    addBtndiv.appendChild(addBtnNode);
    addBtn.appendChild(addBtndiv);
    htmlArtc.appendChild(addBtn);
}
addArtcBtn();

const editMenuDisplay = (i) => {
    const editMenubtn = document.querySelectorAll('.three-dots-icon');
    const editBtn = document.querySelectorAll('.edit-menu');
    editMenubtn[i].addEventListener('click', () => {
        editBtn[i].classList.toggle('edit-active');
    });
}
for (i = 0; i < clothes.length; i++) {
    editMenuDisplay(i);
}
