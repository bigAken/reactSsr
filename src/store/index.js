import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../container/Home/store";
import { reducer as headerReducer } from "../components/Header/store";
import { reducer as translateReducer } from "../container/Translate/store";
import clientAxios from "../client/request";
import serverAxios from "../server/request";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translate: translateReducer,
});

export const getStore = () =>
  createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
