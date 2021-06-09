import TheMovieDbSource from "../../data/themovie-db-source";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;