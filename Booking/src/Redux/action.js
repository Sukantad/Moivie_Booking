// actionTypes
export const GET_LOADING = "GET_LOADING";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_ERROR = "GET_ERROR";

// action creator
export const getMovieLoading = () => ({
  type: GET_LOADING,
});

export const getMovieSuccess = (data) => ({
  type: GET_MOVIE_SUCCESS,
  payload: data,
});

export const getMovieError = () => ({
  type: GET_ERROR,
});

export const getMovie = () => (dispatch) => {
  dispatch(getMovieLoading());
  fetch(`http://localhost:8080/movies`)
    .then((res) => res.json())
    .then((res) => dispatch(getMovieSuccess(res)))
    .catch(() => dispatch(getMovieError()));
};
