// ===== IMPORTS ============================================= //

import '../App/App.css';
import { useState } from 'react';

// ===== FUNCTION ============================================= //

function GalleryItem({ image, updateUpvote }) {

    // ===== STATE VARS ======================================= //

    const [clicked, setClicked] = useState(true);

    // ===== CLICK HANDLERS =================================== //

    const handleClick = () => {
        console.log('yo wuddup, you clicked me');
        setClicked(!clicked)
    }

    const handleUpvote = () => {
        console.log('in handleUpvote');
        updateUpvote(image.id, image.likes);
    }


    // ===== RETURN =========================================== //

    return (
        <>
            <div className="flexbox-container-box">

                {/* Allows user to click image container and see description */}
                <div className="image-container" onClick={handleClick}> 
                    {clicked ? 
                        <img src={image.path} /> : 
                        <div className="img-description"> {image.description} </div>
                    }
                </div>

                {/* Handles upvote to server & displays new Upvote Count */}
                <button onClick={handleUpvote}>Catch!</button>

                {/* Dynamic report of current upvote count */}
                <p>Times caught: {image.likes}</p>

            </div>
        </>
    )
}

// ===== EXPORT ================================================= //

export default GalleryItem;