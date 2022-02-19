import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

  const [imageList, setImageList] = useState([])

  const getImages = () => {
    console.log('in getImages');
    axios.get('/gallery')
      .then((result) => {
        console.log('in getImages .then', result.data);
        setImageList(result.data);
      }).catch((err) => {
        console.log('in getImages .catch', err);
      })
  }

  useEffect(() => {
    getImages();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList imageList={imageList}/>
      {/* <img src="images/goat_small.jpg" /> */}
    </div>
  );
}

export default App;
