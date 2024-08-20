import React, { useState } from "react";
import WatchListCart from "./WatchListCart";

function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let IncreasingRate = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchList([...sortedIncreasing]);
  }
  
  let DecreasingRate = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchList([...sortedDecreasing]);
  }

  let IncreasingPopularity = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchList([...sortedIncreasing]);
  }
  
  let DecreasingPopularity = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchList([...sortedDecreasing]);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center font-bold h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white mx-2 hover:cursor-pointer">
          Action
        </div>
        <div className="flex justify-center items-center font-bold h-[3rem] w-[9rem] bg-gray-200 rounded-xl text-white mx-2 hover:cursor-pointer">
          Action
        </div>
        <div className="flex justify-center items-center font-bold h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white mx-2 hover:cursor-pointer">
          Action
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          name=""
          id=""
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-100 m-8">
        <table className="w-full text-gray-500 text-center text-sm">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center">
                  <div className="p-2 hover:cursor-pointer text-gray-500/60" onClick={IncreasingRate}><i class="fa-solid fa-arrow-up"></i></div>
                  <div className="p-2">Rating</div>
                  <div className="p-2 hover:cursor-pointer text-gray-500/60" onClick={DecreasingRate}><i class="fa-solid fa-arrow-down"></i></div>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <div className="p-2">
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div className="p-2">
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <div className="p-2">
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Genre</div>
                  <div className="p-2">
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {watchList.length > 0 ? (
              watchList
                .filter((movie) => {
                  return movie.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((watch) => {
                  return (
                    <WatchListCart
                      watch={watch}
                      handleRemoveFromWatchList={handleRemoveFromWatchList}
                    />
                  );
                })
            ) : (
              <tr>
                <td colSpan={4}>
                  <h1 className="text-xl p-4">No Movie added into watchlist</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
