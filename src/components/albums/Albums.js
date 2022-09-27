import {useEffect, useState} from "react";

import {albumsServices} from "../../services";
import {Album} from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsServices.getAll().then(({data}) => setAlbums(data))
    }, []);
    return (
        <div>
            {
                albums.map(album => <Album key ={album.id} album={album}/>)
            }
        </div>
    )
}
export {Albums};