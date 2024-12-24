import { AbstractComponent } from "../framework/view/abstract-component.js";

function createPopupComponent() {
  return `
    <div class="modal">
      <div class="modal__cover"></div>
      <div class="modal__cont">
        <div class="modal__close">
          <svg
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
        </div>
        <h6 class="display-5 padding__bottom-30 text-black">Записаться</h6>
      </div>
    </div>
  `;
}

export default class PopupComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createPopupComponent();
  }

  addEventListeners() {
    const modal = this.element;
    const modalCover = modal.querySelector(".modal__cover");
    const modalClose = modal.querySelector(".modal__close");
    
    const modalArr = document.querySelectorAll(".zap");
    modalArr.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
      });
    });

    modalClose.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    modalCover.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }
}