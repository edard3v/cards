import { getCardsFetch } from "./get-cards/getCards.fetch";
import { GetCardsFetchParams } from "./get-cards/types";

export class API {
  static baseUrl = "https://cards-api-sies.onrender.com";

  static getCards(params: GetCardsFetchParams) {
    return getCardsFetch(params);
  }
}
