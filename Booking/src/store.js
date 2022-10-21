import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/AuthReducer";
import MovieReducer from "./Redux/reducer";
import BookingReducer from "./ReduxBooking/Reducer";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     // : compose;

 const middlewares = applyMiddleware(thunk);
 const RootReducer = combineReducers({
  MovieState: MovieReducer,
  BookingState: BookingReducer,
  AuthState: AuthReducer,
 })
// const enhancer = composeEnhancers(middlewares);

export const store = createStore(RootReducer,middlewares);

// store.subscribe(() => {
//   console.log(store.getState());
// });
