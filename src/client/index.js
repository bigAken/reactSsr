import React from "react";
import ReactDOM from "react-dom";
import routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";

const store = getClientStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter context={{t:'opop'}}>
        <div>{renderRoutes(routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
