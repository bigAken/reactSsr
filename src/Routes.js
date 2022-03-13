import Home from "./container/Home";
import Login from "./container/Login";
import App from "./App";
import NotFound from './container/NotFound'
import Translate from "./container/Translate";
export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: "/translate",
        component: Translate,
        exact: true,
        loadData: Translate.loadData,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        component: NotFound,
      },
    ],
  },
];
