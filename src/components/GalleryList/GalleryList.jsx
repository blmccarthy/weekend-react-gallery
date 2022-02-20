// ===== IMPORTS ============================================= //

import GalleryItem from "../GalleryItem/GalleryItem";
import '../App/App.css';

// ===== FUNCTION ============================================= //

const GalleryList = ({ imageList, updateUpvote }) => {

    // ===== RETURN =============================================== //

    return (
        <>
            <div className="flexbox-container-list">
                {imageList.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                    updateUpvote={updateUpvote}
                />)
                )}
            </div>
        </>
    )
}

// ===== EXPORT ================================================= //

export default GalleryList;