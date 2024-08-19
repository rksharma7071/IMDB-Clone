import React from "react";

function MovieCard({
  poster_path,
  original_title,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  movieObj,
  watchList,
}) {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer hover:shadow-xl hover:shadow-gray-600 hover:shadow-md overflow-hidden flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-200/60"
          onClick={() => {
            handleRemoveFromWatchList(movieObj);
          }}
        >
          <i class="fa-solid fa-heart text-red-500"></i>
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-200/60"
          onClick={() => {
            handleAddToWatchList(movieObj);
          }}
        >
          <i class="fa-regular fa-heart art text-xl"></i>
        </div>
      )}

      <div className="text-white w-full p-2 text-center bg-gray-900/60 ">
        {original_title}
      </div>
    </div>
  );
}

export default MovieCard;
