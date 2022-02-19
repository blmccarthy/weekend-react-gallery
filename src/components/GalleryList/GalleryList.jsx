import GalleryItem from "../GalleryItem/GalleryItem";
import './GallaryList.css';


const GalleryList = ({ imageList }) => {

    return (
        <>
            <p>Gallery goes here</p>
            <div className="flexbox-container-list">
                {imageList.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                />)
                )}
            </div>
        </>
    )
}

export default GalleryList;