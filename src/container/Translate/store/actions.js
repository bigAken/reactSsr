import { TRANSLATE_LIST } from "./constants.js";
const changeTranslate = (list) => ({
  type: TRANSLATE_LIST,
  list,
});

export const getTranslate = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/translations").then((res) => {
      console.log('translations',res.data);
      dispatch(changeTranslate(res.data.data));
    });
  };
};
