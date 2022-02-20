// ===== IMPORTS ============================================= //

import GalleryItem from "../GalleryItem/GalleryItem";
import '../App/App.css';

// ===== FUNCTION ============================================= //

const GalleryList = ({ imageList, updateLike, deleteGalleryItem }) => {

    // ===== RETURN =============================================== //

    return (
        <>
            <div className="flexbox-container-list">
                {imageList.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                    updateLike={updateLike}
                    deleteGalleryItem={deleteGalleryItem}
                />)
                )}
            </div>
        </>
    )
}

// ===== EXPORT ================================================= //

export default GalleryList;