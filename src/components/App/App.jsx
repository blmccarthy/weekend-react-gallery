// ===== IMPORTS ============================================= //

import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

// ===== FUNCTION ============================================= //

function App() {

  // ===== STATE VARS =========================================== //

  const [imageList, setImageList] = useState([]);

  // ===== GET ================================================== //

  const getImages = () => {
    axios.get('/gallery')
      .then((result) => {
        console.log('in getImages .then');
        setImageList(result.data);
      }).catch((err) => {
        console.log('in getImages .catch', err);
      })
  }

  // ===== PUT ================================================== //

  const updateUpvote = (id, likes) => {
    console.log('in updateUpvote - id:', id, 'likes:', likes);
    axios.put(`/gallery/like/${id}`)
      .then(result => {
        console.log('in PUT .then');
        getImages();
      }).catch((err) => {
        console.log('in PUT .catch', err);
      })
  }

  // ===== USE EFFECT =========================================== //

  useEffect(() => {
    getImages();
  }, [])

  // ===== RETURN =============================================== //

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pokédex</h1>
      </header>
      <GalleryList
        imageList={imageList}
        updateUpvote={updateUpvote} />
    </div>
  );
}

// ===== EXPORT ================================================= //

export default App;
