import { generateId } from "../utils.js";
import { UpdateType, UserAction } from "../const.js";
import Observable from "../framework/observable.js";

export default class ReviewsModel extends Observable {
  #reviews = [];
  #reviewsApiService = null;

  constructor({ reviewsApiService }) {
    super();
    this.#reviewsApiService = reviewsApiService;
  }

  async init() {
    try {
      const reviews = await this.#reviewsApiService.getReviews();
      this.#reviews = reviews;
    } catch (err) {
      this.#reviews = [];
    }
    this._notify(UpdateType.INIT);
  }

  get reviews() {
    return this.#reviews;
  }

  async addReview(name, image, text) {
    const newReview = {
      name,
      image,
      text,
      id: generateId(),
    };
    try {
      const createdReview = await this.#reviewsApiService.addReview(newReview);
      this.#reviews.push(createdReview);
      this._notify(UserAction.ADD_REVIEW, createdReview);
      return createdReview;
    } catch (err) {
      console.error("Ошибка при добавлении отзыва на сервер: ", err);
      throw err;
    }
  }
}