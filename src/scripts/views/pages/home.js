import TheRestaurantDbSource from '../../data/Therestaurantdb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant List</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homePages();

    const moviesContainer = document.querySelector('#movies');
    restaurants.forEach((resto) => {
      moviesContainer.innerHTML += createMovieItemTemplate(resto);
    });
  },
};

export default Home;
