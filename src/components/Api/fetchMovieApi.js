import axios from "axios";

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzQ3ZGI2NjA2Y2Y0OTFiNmFkNDhhMmNhODAyZDQ0MSIsInN1YiI6IjY1ZDIzNzhkMTY4NWRhMDFiMWM1M2RhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KzZbrylzboXLA9gUHrljkwg_I85TqwYRPNU3qV-A_us';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrend = async () => {
  try {
    const response = await axios.get(
      `trending/movie/day?language=uk-UA`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByID = async (id) => {
  try {
    const response = await axios.get(
      `movie/${id}?language=uk-UA`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInfo = async (id, select) => {
  try {
    const response = await axios.get(
      `movie/${id}/${select}?language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByQuery = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&language=uk-UA&include_adult=false&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
