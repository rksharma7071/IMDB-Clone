import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ba1657dcacc154b48ea946d940785dc4&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <>
      <div className="p-5">
        <div className="text-center text-2xl m-5 font-bold">Trending Movie</div>
        <div className="flex justify-around flex-row flex-wrap gap-8">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                poster_path={movieObj.poster_path}
                original_title={movieObj.original_title}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                key={movieObj.id}
                movieObj={movieObj}
                watchList={watchList}
              />
            );
          })}
        </div>
      </div>
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNo={pageNo}
      />
    </>
  );
}

export default Movies;
