import { CHANGE_LIST } from "./constants.js";
const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/news").then((res) => {
      dispatch(changeList(res.data.list));
    });
  };
};
