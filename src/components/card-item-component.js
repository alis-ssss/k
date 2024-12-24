import { AbstractComponent } from "../framework/view/abstract-component.js";
import { createElement } from "../framework/render.js";

function createCardComponent(title, text, isVisible) {
  return `
        <div class="card__item">
          <h6 class="display-5">
            ${title}
            <div class="card__arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </div>
          </h6>
          <span class="display-7" style="display: ${isVisible ? 'block' : 'none'};">${text}</span>
        </div>
  `;
}

export default class CardComponent extends AbstractComponent {
  #element = null;

  constructor(title, text) {
    super(); 
    this.title = title;
    this.text = text;
    this.isVisible = false; 
  }

  get template() {
    return createCardComponent(this.title, this.text, this.isVisible);
  }
  
  get element() {
    if (!this.#element) {  
      this.#element = createElement(this.template);
      this.addEventListeners(); 
    }
    return this.#element;
  }

  addEventListeners() {
    const arrowElement = this.element.querySelector('.card__arrow');
    const textElement = this.element.querySelector('.display-7');

    arrowElement.addEventListener('click', () => {
      arrowElement.classList.toggle('rotate');
      this.isVisible = !this.isVisible; 
      textElement.style.display = this.isVisible ? 'block' : 'none'; 
    });
  }

  removeElement() {
    super.removeElement(); 
  }
}