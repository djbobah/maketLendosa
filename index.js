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

const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";

// возможно нужно добавить колонки

houses.map((house) => {
  const popularCard = document.createElement("div");
  popularCard.className = "porular__card popular-card_bg";
  const popularCardBody = document.createElement("div");
  popularCardBody.className = "pporular-card__body";

  const popularCardTitle = document.createElement("h3");
  popularCardTitle.className = "porular-card__title";
  popularCardTitle.innerText = house.name;
  popularCardBody.append(popularCardTitle);

  const popularCardDescriptionCol = document.createElement("div");
  popularCardDescriptionCol.className = "popular-card-description__col";

  const popularCardDescription = document.createElement("div");
  popularCardDescription.className = "popular-card__description";
  popularCardDescription.innerText = " Площадь:";

  const popularCardDescriptionTextBold = document.createElement("span");
  popularCardDescriptionTextBold.className =
    "popular-card-description__text_bold";
  popularCardDescriptionTextBold.innerText = house.square;
  popularCardDescription.append(popularCardDescriptionTextBold);

  popularCardDescriptionCol.append(popularCardDescription);

  const popularCardDescription2 = document.createElement("div");
  popularCardDescription2.className = "popular-card__description";
  popularCardDescription2.innerText = " Размеры:";

  const popularCardDescriptionTextBold2 = document.createElement("span");
  popularCardDescriptionTextBold2.className =
    "popular-card-description__text_bold";
  popularCardDescriptionTextBold2.innerText = house.sizes;
  popularCardDescription2.append(popularCardDescriptionTextBold2);

  popularCardDescriptionCol.append(popularCardDescription2);
  popularCardBody.append(popularCardDescriptionCol);

  const popularCardDescriptionCol2 = document.createElement("div");
  popularCardDescriptionCol2.className = "popular-card-description__col";

  const popularCardDescription3 = document.createElement("div");
  popularCardDescription3.className = "popular-card__description";
  popularCardDescription3.innerText = "Срок стройки:";

  const popularCardDescriptionTextBold3 = document.createElement("span");
  popularCardDescriptionTextBold3.className =
    "popular-card-description__text_bold";
  popularCardDescriptionTextBold3.innerText = house.constructionPeriod;
  popularCardDescription3.append(popularCardDescriptionTextBold3);

  popularCardDescriptionCol2.append(popularCardDescription3);

  const popularCardDescription4 = document.createElement("div");
  popularCardDescription4.className = "popular-card__description";
  popularCardDescription4.innerText = " Комнат:";

  const popularCardDescriptionTextBold4 = document.createElement("span");
  popularCardDescriptionTextBold4.className =
    "popular-card-description__text_bold";
  popularCardDescriptionTextBold4.innerText = house.rooms;
  popularCardDescription4.append(popularCardDescriptionTextBold2);

  popularCardDescriptionCol2.append(popularCardDescription4);
  popularCardBody.append(popularCardDescriptionCol2);

  const popularCardDescriptionList = document.createElement("ul");
  popularCardDescriptionList.className = "popular-card-description__list";
  popularCardDescriptionList.innerHTML = "<li>dsfsf</li>";

  // const popularCardDescriptionListItem = document.createElement("li");
  // popularCardDescriptionListItem.className =
  //   "popular-card-description-list__item";
  // popularCardDescriptionListItem.innerText = "Тип дома:";
  // const popularCardDescriptionTextBoldRight = document.createElement("span");
  // popularCardDescriptionTextBoldRight.innerText = house.type;

  // popularCardDescriptionListItem.append(popularCardDescriptionTextBoldRight);

  // popularCardDescriptionList.append(popularCardDescriptionListItem);

  // const popularCardDescriptionListItem2 = document.createElement("li");
  // popularCardDescriptionListItem2.className =
  //   "popular-card-description-list__item";
  // const popularCardDescriptionListItemBigHeight = document.createElement("div");
  // popularCardDescriptionListItemBigHeight.className =
  //   "popular-card-description-list__item_bigHeight";

  // const popularCardDescriptionTextBottom = document.createElement("span");
  // popularCardDescriptionTextBottom.className =
  //   "popular-card-description__text_bottom";
  // popularCardDescriptionTextBottom.innerText = "Стоимость:";
  // popularCardDescriptionListItemBigHeight.append(
  //   popularCardDescriptionTextBottom
  // );
  // const popularCardDescriptionTextBoldRight2 = document.createElement("span");
  // popularCardDescriptionTextBoldRight2.className =
  //   "popular-card-description__text_bold-right";
  // // popularCardDescriptionTextBoldRight2.innerText = " ";
  // popularCardDescriptionTextBoldRight2.innerHTML +=
  //   "от" +
  //   ` \<span class=\"popular-card-description__price\" \>${house.price}\<\/span\> руб\<\/span\>`;
  // popularCardDescriptionListItemBigHeight.append(
  //   popularCardDescriptionTextBoldRight2
  // );

  // popularCardDescriptionListItem2.append(
  //   popularCardDescriptionListItemBigHeight
  // );

  // popularCardDescriptionList.appendChild(popularCardDescriptionListItem2);

  popularCardBody.append(popularCardDescriptionList);

  popularCard.append(popularCardBody);
  cardsContainer.append(popularCard);
});
sectionPopular.append(cardsContainer);
// sectionPopular.append(cardsContainer)
