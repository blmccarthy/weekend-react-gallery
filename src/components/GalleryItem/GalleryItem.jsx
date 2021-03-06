// ===== IMPORTS ============================================= //

import '../App/App.css';
import { useState } from 'react';

// ===== FUNCTION ============================================= //

function GalleryItem({ image, updateLike, deleteGalleryItem }) {

    // ===== STATE VARS ======================================= //

    const [clicked, setClicked] = useState(true);

    // ===== CLICK HANDLERS =================================== //

    const handleClick = () => {
        console.log('yo wuddup, you clicked me');
        setClicked(!clicked)
    }

    const handleUpvote = () => {
        console.log('in handleUpvote');
        updateLike(image.id, image.likes);
    }

    const handleDelete = () => {
        console.log('in handleDelete', image.id);
        deleteGalleryItem(image.id)
    }


    // ===== RETURN =========================================== //

    return (
        <>
            <div className="flexbox-container-box">

                <h3>{image.name}</h3>

                {/* Allows user to click image container and see description */}
                <div className="image-container" onClick={handleClick}> 
                    {clicked ? 
                        <img src={image.path} className="img-image"/> : 
                        <div className="img-description"> {image.description} </div>
                    }
                </div>
                
                <div className="image-buttons">

                    {/* Handles upvote to server & displays new Upvote Count */}
                    <button onClick={handleUpvote}>Catch!</button>

                    {/* Handles delete to server & rerenders gallery */}
                    <button onClick={handleDelete}>Delete</button>

                </div>

                {/* Dynamic report of current upvote count */}
                <p>Times caught: {image.likes}</p>

            </div>
        </>
    )
}

// ===== EXPORT ================================================= //

export default GalleryItem;