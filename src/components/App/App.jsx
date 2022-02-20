// ===== IMPORTS ============================================= //

import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GallerySubmit from '../GallerySubmit/GallerySubmit'
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

  const updateLike = (id, likes) => {
    console.log('in updateLike - id:', id, 'likes:', likes);
    axios.put(`/gallery/like/${id}`)
      .then(result => {
        console.log('in PUT .then');
        getImages();
      }).catch((err) => {
        console.log('in PUT .catch', err);
      })
  }

  // ===== DELETE =============================================== //

  const deleteGalleryItem = (id) => {
    console.log('in deleteGalleryItem', id);
    axios.delete(`/gallery/${id}`)
    .then((result) => {
      console.log('in deleteGalleryItem .then');
      getImages();
    }).catch((err) => {
      console.log('in deleteGalleryItem .catch', err);
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
      <GallerySubmit 
        getImages={getImages}/>
      <GalleryList
        imageList={imageList}
        updateLike={updateLike} 
        deleteGalleryItem={deleteGalleryItem}/>
    </div>
  );
}

// ===== EXPORT ================================================= //

export default App;
