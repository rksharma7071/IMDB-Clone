import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error404 from "./components/Error404";


const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchMovie = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchMovie));
    setWatchList(newWatchMovie);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  // Set up routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<Error404/>,
      children: [
        {
          path: "/",
          element: (
            <>
              <Banner />
              <Movie
                watchList={watchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          ),
        },
        {
          path: "watchlist",
          element: (
            <WatchList
              watchList={watchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              setWatchList={setWatchList}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;