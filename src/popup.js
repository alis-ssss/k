import { render, RenderPosition } from "/src/framework/render.js";
import popupComponent from "/src/components/popup-component.js";
import FormComponent from '/src/components/form-component.js';
import ApiService from './framework/view/api-service.js';

const bodyContainer = document.querySelector("body");
const popup = new popupComponent();
render(popup, bodyContainer, RenderPosition.AFTERBEGIN);
popup.addEventListeners();

const modalContainer = document.querySelector(".modal__cont");

const apiService = new ApiService('https://6762d71217ec5852cae74832.mockapi.io/api/v1/');
const formComponent = new FormComponent();

async function handleSubmitFeedback(feedbackData) {
  try {
    await apiService.sendFeedback(feedbackData);
    alert('Успешно отправлен!');
  } catch (err) {
    alert('Произошла ошибка при отправке. Попробуйте снова.');
  }
}

render(formComponent, modalContainer, RenderPosition.BEFOREEND);
formComponent.setSubmitHandler(handleSubmitFeedback);
