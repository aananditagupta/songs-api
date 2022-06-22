import React, { useEffect, useState} from 'react';
import LoadingSpinner from "../components/LoadingSpinner";
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const Song = () => {
    const { id } = useParams()
    let [songs, setSongs] = useState({})
    let [songLink, setSongLink] = useState([])
    const [isLoading, setIsLoading] = useState(false) 
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
        setIsLoading(true)
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://openwhyd.org/c/${id}?format=json`)
        .then(response => {
            setSongs(response.data.data)
            console.log(response.data.data)
            setSongLink(response.data.data.src)
            setIsLoading(false)
        })
        .catch(() => {
            setErrorMessage("Unable to fetch song list")
            setIsLoading(false);
        })
    }, [])

    const renderSongDescription = (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px" }}>
            <div style={{width: "90%", height: "400px", backgroundRepeat: "no-repeat", backgroundImage: `url(${songs.img})`, backgroundSize: "contain", backgroundPosition: "center"}}></div>
            <h3>{songs.name}</h3> 
            <a href={`${songLink.id}`} target="_blank" rel="noreferrer">
                <button>Youtube Link</button>
            </a>
        </div>
    )

    return (
        <>
        <div className='App' style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px" }}>
            {isLoading ? <LoadingSpinner /> : renderSongDescription}

            {errorMessage && <div className="error">{errorMessage}</div>}
        </div> 
        </>
    );
};

export default Song;