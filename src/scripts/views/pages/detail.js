import TheMovieDbSource from "../../data/themovie-db-source";
import UrlParser from "../../routes/url-parser";
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;