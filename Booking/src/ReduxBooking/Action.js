// actionTypes
export const GET_LOADING = "GET_LOADING";
export const GET_BOOKING_SUCCESS = "GET_BOOKING_SUCCESS";
export const GET_ERROR = "GET_ERROR";

// action creator
export const getBookingLoading = () => ({
  type: GET_LOADING,
});

export const getBookingSuccess = (data) => ({
  type: GET_BOOKING_SUCCESS,
  payload: data,
});

export const getBookingError = () => ({
  type: GET_ERROR,
});

export const MovieDisplay = ()=>( dispatch) => {

    fetch("http://localhost:8080/moviesBooked")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getBookingSuccess(res))
      })
  
  }