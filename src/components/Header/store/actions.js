import { CHANGE_LOGIN } from "./constants";

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value,
});

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/logout").then((res) => {
      dispatch(changeLogin(false));
    });
  };
};
export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/login").then((res) => {
      document.cookie = "login" + "=" + escape(true);
      dispatch(changeLogin(true));
    });
  };
};

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/isLogin").then((res) => {
      dispatch(changeLogin(res.data.data.login));
    });
  };
};
