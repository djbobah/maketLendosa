const houses = [
  {
    img: "",
    name: "Атаман",
    square: 108,
    constructionPeriod: 16,
    sizes: "7x9",
    rooms: 5,
    type: "Каркасный",
    price: 1780000,
    floors: 1,
    withTheAttic: false,
    withBasementFloor: false,
    withGarage: false,
    withPanoramicWindows: false,
  },
  {
    img: "",
    name: "Атаман2",
    square: 110,
    constructionPeriod: 17,
    sizes: "7x10",
    rooms: 6,
    type: "Каркасный",
    price: 1780001,
    floors: 2,
    withTheAttic: false,
    withBasementFloor: true,
    withGarage: true,
    withPanoramicWindows: false,
  },
  {
    img: "",
    name: "Атаман3",
    square: 112,
    constructionPeriod: 18,
    sizes: "7x9",
    rooms: 5,
    type: "Каркасный",
    price: 1780002,
    floors: 1,
    withTheAttic: true,
    withBasementFloor: false,
    withGarage: false,
    withPanoramicWindows: false,
  },
  {
    img: "",
    name: "Атаман4",
    square: 114,
    constructionPeriod: 19,
    sizes: "7x13",
    rooms: 5,
    type: "Каркасный",
    price: 1780003,
    floors: 2,
    withTheAttic: false,
    withBasementFloor: false,
    withGarage: false,
    withPanoramicWindows: false,
  },
  {
    img: "",
    name: "Атаман5",
    square: 120,
    constructionPeriod: 20,
    sizes: "9x9",
    rooms: 5,
    type: "Каркасный",
    price: 1780004,
    floors: 3,
    withTheAttic: false,
    withBasementFloor: false,
    withGarage: false,
    withPanoramicWindows: false,
  },
  {
    img: "",
    name: "Атаман6",
    square: 130,
    constructionPeriod: 21,
    sizes: "15x9",
    rooms: 5,
    type: "Каркасный",
    price: 1780005,
    floors: 1,
    withTheAttic: true,
    withBasementFloor: true,
    withGarage: true,
    withPanoramicWindows: true,
  },
];
const filterList = [
  "Одноэтажный",
  "С мансардой",
  "Двухэтажный",
  "С цокольным этажом",
  "Трехэтажные",
  "С панорамными окнами",
  "С гаражом",
];

const sectionPopular = document.querySelector(".container-popular");

const title = document.createElement("h2");
title.className = "container__title container__title_bold";
title.innerText = "Посмотрите популярные проекты домов";
sectionPopular.append(title);

const filterMenu = document.createElement("nav");
filterMenu.className = "menu-popular";

const arrowLeft = document.createElement("img");
arrowLeft.className = "menu-popular__arrow";
arrowLeft.src = "img/arrowLeft.svg";
arrowLeft.alt = "arrowLeft";
filterMenu.append(arrowLeft);

filterList.map((item) => {
  let filterItem = document.createElement("div");
  filterItem.className = "menu-popular__item";
  filterItem.innerText = item;
  filterMenu.append(filterItem);
});

const arrowRight = document.createElement("img");
arrowRight.className = "menu-popular__arrow";
arrowRight.src = "img/arrowRight.svg";
arrowRight.alt = "arrowRight";
filterMenu.append(arrowRight);

const menuLink = document.createElement("a");
menuLink.className = "menu-popular__link";
menuLink.href = "";
menuLink.innerText = "Смотреть все";
filterMenu.append(menuLink);

sectionPopular.append(filterMenu);
