import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const moviesContainer = document.querySelector('#movies');

    restaurants.forEach((restaurant) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
    });
  },
};

export default Like;
