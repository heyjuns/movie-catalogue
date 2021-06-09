import API_ENDPOINT from "../globals/api-endpoint";

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = response.json();
    return responseJSON.results;
  }
}

export default TheMovieDbSource;