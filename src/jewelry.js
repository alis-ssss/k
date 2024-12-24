import menuComponent from "/src/components/menu-component.js";
import footerComponent from "/src/components/footer-component.js";
import FormComponent from '/src/components/form-component.js';
import ApiService from './framework/view/api-service.js';
import { render, RenderPosition } from "/src/framework/render.js";

const bodyContainer = document.querySelector("body");

const menu = new menuComponent();
render(menu, bodyContainer, RenderPosition.AFTERBEGIN);
menu.initEvents();

render(new footerComponent(), bodyContainer, RenderPosition.beforeend);

const apiService = new ApiService('https://6762d71217ec5852cae74832.mockapi.io/api/v1/');
const formComponent = new FormComponent();

async function handleSubmitFeedback(feedbackData) {
  try {
    await apiService.sendFeedback(feedbackData);
    alert('Ваша заявка была успешна отправлена!');
  } catch (err) {
    alert('Произошла ошибка при отправке. Попробуйте снова.');
  }
}

render(formComponent, document.querySelector('.form__container'));
formComponent.setSubmitHandler(handleSubmitFeedback);