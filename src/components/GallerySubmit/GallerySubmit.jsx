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
            res.sendStatus(200);
        }).catch((err) => {
            console.log('in POST .catch', err);
            res.sendStatus(500);
        })
    }

    // ===== RETURN ========================================== //

    return (
        <>
            <div>
                <h3>Submit a new Pokemon!</h3>
                <input 
                    value={newName} 
                    placeholder="Name"
                    onChange={(event) => setNewName(event.target.value)}
                />
                <input 
                    value={newDesc} 
                    placeholder="Description"
                    onChange={(event) => setNewDesc(event.target.value)}
                />
                <input 
                    value={newPath} 
                    placeholder="Image URL"
                    onChange={(event) => setNewPath(event.target.value)}
                />
                <button onClick={postNewImage}>Submit</button>
            </div>
        </>
    )
}

// ===== EXPORT =============================================== //

export default GallerySubmit;