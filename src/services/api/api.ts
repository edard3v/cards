import { GetCardsFetchParams, getCardsFetch } from "./fetch/getCards.fetch";

export class API {
  static baseUrl = "https://cards-api-sies.onrender.com";

  static getCards(params: GetCardsFetchParams) {
    return getCardsFetch(params);
  }
}
