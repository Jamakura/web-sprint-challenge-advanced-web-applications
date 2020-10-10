import { axiosWithAuth } from "./axiosWithAuth";

export const FetchColors = (setColorList) => {
  axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      // Set token in local storage

      console.log("SV: FetchColors: FetchColors: res", res);
      setColorList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
