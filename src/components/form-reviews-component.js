import { AbstractComponent } from "../framework/view/abstract-component.js";

function createFormReviewsComponent() {
  return `
      <form class="form" id="review-form">
        <div class="form__row">
          <input class="input" type="text" name="name" placeholder="Имя" required />
          <input class="input" type="text" name="image" placeholder="Ссылка на изображение" required />
        </div>
        <textarea class="input" name="text" placeholder="Сообщение" required></textarea>
        <div class="form__btn">
          <button type="submit" class="btn display-4">Отправить</button>
        </div>
      </form>
  `;
}

export default class FormReviewsComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createFormReviewsComponent();
  }

  setSubmitHandler(handler) {
    document
      .querySelector("#review-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name").trim();
        const image = formData.get("image").trim();
        const text = formData.get("text").trim();

        if (!name || !image || !text) {
          alert("Все поля должны быть заполнены.");
          return;
        }

        if (!this.isValidUrl(image)) {
          alert("Введите корректный URL для изображения.");
          return;
        }

        handler(name, image, text);
        document.querySelector("#review-form").reset();
        document.querySelector(".reviews__cont").innerHTML = "";
      });
  }

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}
