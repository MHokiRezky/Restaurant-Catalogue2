/* eslint-disable quotes */
import API_ENDPOINT from "../globals/api-endpoint";

class TheRestaurantDbSource {
  static async homePages() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default TheRestaurantDbSource;
