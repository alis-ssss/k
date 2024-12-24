import menuComponent from "/src/components/menu-component.js";
import footerComponent from "/src/components/footer-component.js";
import jewelryComponent from "/src/components/jewelry-component.js";
import cardComponent from "/src/components/card-item-component.js";
import { render, RenderPosition } from "/src/framework/render.js";

const bodyContainer = document.querySelector("body");

const menu = new menuComponent();
render(menu, bodyContainer, RenderPosition.AFTERBEGIN);
menu.initEvents();

render(new footerComponent(), bodyContainer, RenderPosition.beforeend);

const jewelryArr = [
    { image: "./src/image/12.jpeg", title: "Создание кольца", price: "5000₽", text: "Научитесь создавать уникальные кольца с нуля!" },
    { image: "./src/image/14.jpeg", title: "Изготовление серег", price: "4500₽", text: "Создайте свои собственные серьги, которые будут сверкать!" },
    { image: "./src/image/15.jpeg", title: "Броши для начинающих", price: "4000₽", text: "Погрузитесь в мир брошей и создайте свой шедевр!" },
    { image: "./src/image/16.jpeg", title: "Ювелирные техники", price: "6000₽", text: "Узнайте секреты ювелирного мастерства от профессионалов!" },
    { image: "./src/image/17.jpeg", title: "Курс по дизайну", price: "7000₽", text: "Развивайте свои навыки дизайна и создавайте уникальные украшения!" },
    { image: "./src/image/18.jpeg", title: "Мастер-класс по гравировке", price: "5500₽", text: "Научитесь гравировать и добавьте индивидуальность своим изделиям!" },
  ];
  
  const jewelryContainer = document.querySelector(".jewelry__container");
  render(new jewelryComponent(jewelryArr), jewelryContainer, RenderPosition.beforeend);

  
const cardContainer = document.querySelector(".card");
const cardsArr = [
  {
    title: "Часто задаваемые вопросы",
    text: "Как записаться на мастер-класс?",
  },
  {
    title: "Просто выберите дату и время, и вперед!",
    text: "Просто выберите дату и время, и вперед!",
  },
  {
    title: "Есть ли скидки для групп?",
    text: "Да, для групповых записей действуют специальные предложения!",
  },
  {
    title: "Можно ли отменить запись?",
    text: "Да, но не забудьте сделать это заранее!",
  },
  {
    title: "Какой уровень подготовки нужен?",
    text: "Не переживайте, мы обучаем всех!",
  },
  {
    title: "Где проходят мастер-классы?",
    text: "В нашем уютном зале в центре города!",
  },
];

cardsArr.forEach((el) => {
  render(
    new cardComponent(el.title, el.text),
    cardContainer,
    RenderPosition.AFTERBEGIN
  );
});
