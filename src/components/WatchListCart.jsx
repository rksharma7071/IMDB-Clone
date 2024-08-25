import React from "react";


function WatchListCart({ watch, handleRemoveFromWatchList, genreids }) {
  return (
    <tr className="border-b-2">
      <td className="flex items-center px-6 py-4 object-contain">
        <div className="w-[100px]">
          {/* <img className="rounded-lg hover:shadow-sm hover:shadow-black hover:shadow-md" src={`https://image.tmdb.org/t/p/original/${watch.poster_path}`} alt="" /> */}
          <img
            className="rounded-lg hover:shadow-sm hover:shadow-black hover:shadow-md"
            src={`https://image.tmdb.org/t/p/original/${watch.backdrop_path}`}
            alt={`${watch.original_title}`}
            loading="lazy"
          />
        </div>
        <div className="mx-10 ">{watch.original_title}</div>
      </td>
      <td>{watch.vote_average.toFixed(1)}</td>
      <td>{watch.vote_count}</td>
      <td>{genreids[watch.genre_ids[0]]}</td>
      <td
        className="text-red-800 hover:cursor-pointer"
        onClick={() => {
          handleRemoveFromWatchList(watch);
        }}
      >
        Delete
      </td>
    </tr>
  );
}

export default WatchListCart;
