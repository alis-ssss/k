import menuComponent from "/src/components/menu-component.js";
import footerComponent from "/src/components/footer-component.js";
import carouselComponent from "/src/components/carousel-component.js";
import aboutComponent from "/src/components/about-component.js";
import statisticsComponent from "/src/components/statistics-component.js";
import { render, RenderPosition } from "/src/framework/render.js";

const bodyContainer = document.querySelector("body");

const menu = new menuComponent();
render(menu, bodyContainer, RenderPosition.AFTERBEGIN);
menu.initEvents();

render(new footerComponent(), bodyContainer, RenderPosition.beforeend);

const carouselContainer = document.querySelector(".carousel__conteiner");
const carouselArr = [
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg"
];

render(new carouselComponent(carouselArr), carouselContainer, RenderPosition.BEFOREEND);

const aboutContainer = document.querySelector(".about");
render(new aboutComponent(), aboutContainer, RenderPosition.BEFOREEND);

const statisticsContainer = document.querySelector(".statistics");
render(new statisticsComponent(), statisticsContainer, RenderPosition.BEFOREEND);
