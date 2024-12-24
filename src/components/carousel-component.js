import { AbstractComponent } from "../framework/view/abstract-component.js";
import { createElement } from "/src/framework/render.js";

function createCarouselComponent(items) {
  return `
        <div class="carousel" style="transform: translate3d(0, 0, 0)">
          ${items}
        </div>
  `;
}

export default class AboutComponent extends AbstractComponent {
  #element = 0;

  constructor(imageArr) {
    super();
    this.#element = null;
    this.imageArr = imageArr;
    this.scrollPosition = 0;
  }

  get template() {
    return createCarouselComponent(this.getItems());
  }

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.getTemplate());
    }
    return this.#element;
  }

  getItems() {
    let items = this.imageArr.map((el) => {
      return `<div class="grid-item">
            <img src="${el}" alt="" />
          </div>`;
    });
    return items.join(" ");
  }

  addScrollListener() {
    window.addEventListener("scroll", () => {
      const carousel = document.querySelector(".carousel");
      const scrollAmount = window.scrollY;

      carousel.style.transform = `translateX(-${scrollAmount}px)`;

      this.scrollPosition = scrollAmount;
    });
  }
}
