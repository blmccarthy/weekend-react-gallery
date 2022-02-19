import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ image }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log('yo wuddup you clicked me');
        setClicked(!clicked)
    }

    return (
        <>
            <div className="flexbox-container-img">
                <div onClick={handleClick}>
                    {clicked ? <p>{image.description}</p> : <img src={image.path} />}
                </div>
                <button>love it!</button>
                <p>No one love this :(</p>
            </div>
        </>
    )
}

export default GalleryItem;