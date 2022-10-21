import { GET_LOADING, GET_ERROR, GET_BOOKING_SUCCESS } from "./Action";

const initState = {
  loading: false,
  error: false,
  data: [],
};

function BookingReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_LOADING: {
      return {
        loading: true,
        error: false,
        data: [],
      };
    }
    case GET_BOOKING_SUCCESS: {
      return {
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_ERROR: {
      return {
        loading: false,
        error: true,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
}

export default BookingReducer;
