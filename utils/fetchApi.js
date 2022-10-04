import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d163aa7adbmshfc3807ab5a3472cp16efc9jsn473a11d842b1",
    },
  });

  return data;
};
