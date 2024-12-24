import { AbstractComponent } from "../framework/view/abstract-component.js";

function createStatisticsComponent() {
  return `
      <div class="container container__statistics">
        <div class="statistics__item">
          <div class="statistics__number display-1">500+</div>
          <div class="statistics__text display-5">Счастливых клиентов</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__number display-1">100+</div>
          <div class="statistics__text display-5">Мастер-классов</div>
        </div>
        <div class="statistics__item">
          <div class="statistics__number display-1">10+</div>
          <div class="statistics__text display-5">Опытных преподавателей</div>
        </div>
      </div>
  `;
}

export default class StatisticsComponent extends AbstractComponent {
  constructor() {
    super();
  }

  get template() {
    return createStatisticsComponent();
  }
}
