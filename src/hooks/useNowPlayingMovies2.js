import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies2 = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      apiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies2;