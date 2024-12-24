import menuComponent from "/src/components/menu-component.js";
import footerComponent from "/src/components/footer-component.js";
import contactsComponent from "/src/components/contacts-component.js";
import { render, RenderPosition } from "/src/framework/render.js";

const bodyContainer = document.querySelector("body");

const menu = new menuComponent();
render(menu, bodyContainer, RenderPosition.AFTERBEGIN);
menu.initEvents();

render(new footerComponent(), bodyContainer, RenderPosition.beforeend);

const contactsContainer = document.querySelector(".contacts__container");
render(new contactsComponent(), contactsContainer, RenderPosition.beforeend);