export default class ApiService {
  constructor(endPoint) {
      this._endPoint = endPoint;
  }

  async getReviews() {
    return this._load({ url: 'reviews' })
      .then(ApiService.parseResponse);
  }

  async addReview(review) {
    return this._load({
      url: 'reviews',
      method: 'POST',
      body: JSON.stringify(review),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }).then(ApiService.parseResponse);
  }

  async _load({ url, method = 'GET', body = null, headers = new Headers() }) {
    const response = await fetch(`${this._endPoint}/${url}`, { method, body, headers });
    ApiService.checkStatus(response);
    return response;
  }
  
  static parseResponse(response) {
    return response.json();
  }
  
  static checkStatus(response) {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  async sendFeedback(feedback) {
    return this._load({
      url: 'feedback',
      method: 'POST',
      body: JSON.stringify(feedback),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    }).then(ApiService.parseResponse);
  }
  
}