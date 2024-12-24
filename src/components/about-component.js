import { AbstractComponent } from "../framework/view/abstract-component.js";

function createAboutComponent() {
  return `
      <div class="container container__about">
        <div class="about__image">
          <img src="./src//image/2.jpeg" alt="" srcset="" />
        </div>
        <div class="about__content">
          <h1 class="display-2">О нашей мастерской</h1>
          <p class="display-7">
            Добро пожаловать в мир ювелирного искусства! Наша мастерская — это
            не просто место, где создаются украшения, это настоящая кузница
            талантов и идей.
          </p>
          <p class="display-7">
            Мы предлагаем уникальные мастер-классы, где каждый может попробовать
            себя в роли ювелира. Наши опытные преподаватели поделятся с вами
            секретами мастерства и помогут создать что-то поистине уникальное.
          </p>
          <p class="display-7">
            Мы верим, что каждый может стать мастером, и наша миссия —
            вдохновлять и обучать людей, чтобы они могли создавать красоту
            своими руками.
          </p>
        </div>
      </div>
  `;
}

export default class AboutComponent extends AbstractComponent {
  constructor() {
    super(); 
  }

  get template() {
    return createAboutComponent();
  }
}