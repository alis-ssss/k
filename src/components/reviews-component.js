import { AbstractComponent } from "../framework/view/abstract-component.js";

function createReviewsComponent(text, image, name) {
  return `
          <div class="reviews__item">
            <span class="reviews__text display-7"
              >${text}</span
            >
            <img src="${image}" alt="" srcset="" />
            <span class="reviews__name display-7">${name}</span>
          </div>
  `;
}

export default class ReviewsComponent extends AbstractComponent {
  constructor(text, image, name) {
    super();
    this.text = text;
    this.image = image;
    this.name = name;
  }

  get template() {
    return createReviewsComponent(this.text, this.image, this.name);
  }
}