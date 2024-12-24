import { AbstractComponent } from "../framework/view/abstract-component.js";

function createMenuComponent() {
  return `
    <div class="navbar">
      <div class="navbar__container">
        <div class="navbar__mobile">
          <div class="navbar__ul navbar__ul-mobile">
            <a href="about.html" class="display-4">О нас</a>
            <a href="class.html" class="display-4">Мастер классы</a>
            <a href="jewelry.html" class="display-4">Украшения на заказ</a>
            <a href="contacts.html" class="display-4">Контакты</a>
          </div>
          <a href="#" class="zap navbar__btn btn display-4">Записаться</a>
        </div>
        <div class="navbar__brand">
          <a href="index.html" class="navbar__logo">
            <img
              src="./src/image/19.jpeg"
              alt=""
              style="height: 4.3rem"
              class="navbar__image"
            />
          </a>
          <a class="navbar-caption display-4" href="index.html">Al&amp;Jewels</a>
        </div>
        <div class="navbar__menu">
          <div class="navbar__ul">
            <a href="about.html" class="display-4">О нас</a>
            <a href="class.html" class="display-4">Мастер классы</a>
            <a href="jewelry.html" class="display-4">Украшения на заказ</a>
            <a href="contacts.html" class="display-4">Контакты</a>
          </div>
          <a href="#" class="zap navbar__btn btn display-4">Записаться</a>
        </div>
        <div class="navbar__bars">
          <svg
            id="close__bars"
            class="hidden"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            viewBox="0 0 50 50"
          >
            <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
            ></path>
          </svg>
          <svg
            id="nav__bars"
            xmlns="http://www.w3.org/2000/svg"
            id="mdil-menu"
            viewBox="0 0 24 24"
          >
            <path d="M3,8V7H20V8H3M20,12V13H3V12H20M3,17H20V18H3V17Z" />
          </svg>
        </div>
      </div>
    </div>
  `;
}

export default class MenuComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createMenuComponent();
  }

  initEvents() {
    const NAVBAR = this.element.querySelector(".navbar__mobile");
    const CLOSEBAR = this.element.querySelector("#close__bars");
    const NAVBARS = this.element.querySelector("#nav__bars");

    NAVBARS.addEventListener("click", () => {
      NAVBAR.classList.add("navbar__mobile-show");
      NAVBARS.classList.add("hidden");
      CLOSEBAR.classList.remove("hidden");
    });

    CLOSEBAR.addEventListener("click", () => {
      NAVBAR.classList.remove("navbar__mobile-show");
      NAVBARS.classList.remove("hidden");
      CLOSEBAR.classList.add("hidden");
    });
  }
}