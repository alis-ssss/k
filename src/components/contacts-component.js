import { AbstractComponent } from "../framework/view/abstract-component.js";

function createContactsComponent() {
  return `
      <div class="contacts__block container">
        <div class="contacts">
          <h1 class="display-2">Контактная информация</h1>
          <div class="contacts__col">
            <p class="display-7">Телефон: +7 (123) 456-78-90</p>
            <p class="display-7">Email: info@jewelryworkshop.ru</p>
            <p class="display-7">Адрес: Kazan Russian Federation</p>
            <p class="display-7">
              Часы работы: Пн-Пт: 10:00 - 19:00
            </p>
          </div>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143556.86781916342!2d48.999137507604615!3d55.79191717308061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1734466869721!5m2!1sru!2sru"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="iframe__map"
          ></iframe>
        </div>
      </div>
  `;
}

export default class ContactsComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createContactsComponent();
  }
}
