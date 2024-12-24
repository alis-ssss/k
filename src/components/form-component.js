import { AbstractComponent } from "../framework/view/abstract-component.js";

function createFormComponent() {
  return `
      <form class="form" id="feedback-form">
        <div class="form__row">
          <input class="input" type="text" name="name" placeholder="Имя" required />
          <input class="input" type="email" name="email" placeholder="Email" required />
        </div>
        <input class="input" type="tel" name="phone" placeholder="Телефон" required />
        <textarea class="input" name="message" placeholder="Сообщение" required></textarea>
        <button type="submit" class="btn display-4">Отправить</button>
      </form>
  `;
}

export default class FormComponent extends AbstractComponent {
  get template() {
    return createFormComponent();
  }

  setSubmitHandler(handler) {
    document.querySelector('#feedback-form').addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const name = formData.get('name').trim();
      const email = formData.get('email').trim();
      const phone = formData.get('phone').trim();
      const message = formData.get('message').trim();

      if (!name || !email || !phone || !message) {
        alert("Все поля должны быть заполнены.");
        return;
      }

      handler({ name, email, phone, message });
    });
  }
}