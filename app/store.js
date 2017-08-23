import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

// create history
export const history = createHistory();

// react-router-redux
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export default store;
