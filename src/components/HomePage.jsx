import React from 'react'

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Movie
        handleAddToWatchList={handleAddToWatchList}
        handleRemoveFromWatchList={handleRemoveFromWatchList}
        watchList={watchList}
      />
    </>
  )
}

export default HomePage