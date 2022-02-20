// ===== IMPORTS ============================================= //

import axios from 'axios';
import {useState} from 'react';

// ===== FUNCTION ============================================ //

function GallerySubmit({getImages}) {
    
    // ===== STATE VARS ====================================== //

    const [newName, setNewName] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newPath, setNewPath] = useState('')

    // ===== POST ============================================ //

    const postNewImage = () => {
        console.log('in postNewImage');
        axios.post('/gallery', {
            name: newName,
            description: newDesc,
            path: newPath
        }).then((dbRes) => {
            console.log('in POST .then');
            getImages();
        }).catch((err) => {
            console.log('in POST .catch', err);
        })
    }

    // ===== RETURN ========================================== //

    return (
        <>
            <h3>Submit a new Pokemon!</h3>
            <div className="inp-block">
                <input 
                    className="input-name"
                    value={newName} 
                    placeholder="Name"
                    onChange={(event) => setNewName(event.target.value)}
                />
                <input 
                    className="input-desc"
                    value={newDesc} 
                    placeholder="Description"
                    onChange={(event) => setNewDesc(event.target.value)}
                />
                <input 
                     className="input-path"
                    value={newPath} 
                    placeholder="Image URL"
                    onChange={(event) => setNewPath(event.target.value)}
                />
                <button 
                    className="input-btn-submit" 
                    onClick={postNewImage}
                >
                    Submit
                </button>
            </div>
        </>
    )
}

// ===== EXPORT =============================================== //

export default GallerySubmit;