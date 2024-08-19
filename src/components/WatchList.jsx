import React from "react";

function WatchList({ watchList }) {
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
          name=""
          id=""
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-100 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.length > 0 ? (
              watchList.map((watch) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4 object-contain">
                      <div className="w-[100px]">
                        <img
                          className="rounded-lg hover:shadow-sm hover:shadow-black hover:shadow-md"
                          src={`https://image.tmdb.org/t/p/original/${watch.poster_path}`}
                          alt=""
                        />
                      </div>

                      <div className="mx-10 ">{watch.original_title}</div>
                    </td>
                    <td>{watch.vote_average}</td>
                    <td>{watch.vote_count}</td>
                    <td>Action</td>
                    <td className="text-red-800 hover:cursor-pointer" onClick={() => {handleRemoveFromWatchList(watch);}}>Delete</td>
                  </tr>
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
