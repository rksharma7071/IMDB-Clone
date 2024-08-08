import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movie />}></Route>  
          <Route path="/watchlist" element={<WatchList />}></Route>  
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
