import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchMovie = [...watchList, movieObj];
    setWatchList(newWatchMovie);
    console.log(newWatchMovie);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filteredWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movie
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
