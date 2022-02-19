import './GalleryItem.css'

function GalleryItem({ image }) {


    return (
        <>
            <div className="flexbox-container-img">
                <img src={image.path} />
                <button>love it!</button>
                <p>No one love this :(</p>
            </div>
        </>
    )
}

export default GalleryItem;