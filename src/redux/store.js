import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

// TODO Add compose reducers if it escalates
import reducers from "./reducers/peopleReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const middlewares = [thunk]

const configureStores = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStores;
