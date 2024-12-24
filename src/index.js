import menuComponent from "/src/components/menu-component.js";
import footerComponent from "/src/components/footer-component.js";
import reviewsComponent from "/src/components/reviews-component.js";
import carouselComponent from "/src/components/carousel-component.js";
import aboutComponent from "/src/components/about-component.js";
import statisticsComponent from "/src/components/statistics-component.js";
import formReviewsComponent from "/src/components/form-reviews-component.js";
import { render, RenderPosition } from "/src/framework/render.js";

import ReviewsModel from './model/reviews-model.js';
import ApiService from './framework/view/api-service.js';

const bodyContainer = document.querySelector("body");

const menu = new menuComponent();
render(menu, bodyContainer, RenderPosition.AFTERBEGIN);
menu.initEvents();

render(new footerComponent(), bodyContainer, RenderPosition.beforeend);

const reviewsContainer = document.querySelector(".reviews__cont");

const apiService = new ApiService('https://6762d71217ec5852cae74832.mockapi.io/api/v1/');
const reviewsModel = new ReviewsModel({ reviewsApiService: apiService });
const FormReviewsComponent = new formReviewsComponent();

async function renderReviews() {
  const reviews = reviewsModel.reviews;
  reviews.forEach((el) => {
    render(
      new reviewsComponent(el.text, el.image, el.name),
      reviewsContainer,
      RenderPosition.AFTERBEGIN
    );
  });
}


await reviewsModel.init();
renderReviews();

render(FormReviewsComponent, document.querySelector('.form__container'));

FormReviewsComponent.setSubmitHandler(async (name, image, text) => {
  try {
    await reviewsModel.addReview(name, image, text);
    renderReviews();
  } catch (err) {
    console.error(err);
  }
});

const carouselContainer = document.querySelector(".carousel__conteiner");
const carouselArr = [
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg",
  "./src/image/3.jpeg",
  "./src/image/4.jpeg",
  "./src/image/5.jpeg",
  "./src/image/6.jpeg"
];

const carousel = new carouselComponent(carouselArr);
render(carousel, carouselContainer, RenderPosition.BEFOREEND);
carousel.addScrollListener();

const aboutContainer = document.querySelector(".about");
render(new aboutComponent(), aboutContainer, RenderPosition.BEFOREEND);

const statisticsContainer = document.querySelector(".statistics");
render(new statisticsComponent(), statisticsContainer, RenderPosition.BEFOREEND);
