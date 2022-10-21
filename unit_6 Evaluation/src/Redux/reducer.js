import { GET_LOADING, GET_MOVIE_SUCCESS, GET_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  movies: [],
};

function MovieReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_LOADING: {
      return {
        loading: true,
        error: false,
        movies: [],
      };
    }
    case GET_MOVIE_SUCCESS: {
      return {
        loading: false,
        error: false,
        movies: payload,
      };
    }
    case GET_ERROR: {
      return {
        loading: false,
        error: true,
        movies: [],
      };
    }
    default: {
      return state;
    }
  }
}

export default MovieReducer;
