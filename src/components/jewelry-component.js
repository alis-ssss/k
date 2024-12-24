import { AbstractComponent } from "../framework/view/abstract-component.js";

function createJewelryComponent(items) {
  return `
        <div class="container jewelry">
          ${items}
      </div>
  `;
}

export default class JewelryComponent extends AbstractComponent {
  constructor(items) {
    super();
    this.items = items;
  }

  get template() {
    return createJewelryComponent(this.getItems());
  }

  getItems() {
    return this.items.map(el => {
      return `
        <div class="jewelry__item">
          <img src="${el.image}" alt="" srcset="" />
          <div class="jewelry__title display-5">${el.title}</div>
          <div class="jewelry__price display-7">${el.price}</div>
          <div class="jewelry__text display-7">
            ${el.text}
          </div>
          <div class="jewelry__btn"><a href="#" class="zap btn display-4">Записаться</a></div>
        </div>`;
    }).join(' ');
  }
}