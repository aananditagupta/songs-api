import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

export const Home = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://openwhyd.org/adrien?format=json&limit=14')
      .then(response => {
        setSongs(response.data)
        console.log(response.data)
      })
  }, [])
  

  return (
    <>
      <h1>Space X Ships</h1>
      <div>
        <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
          {songs.map((song) => (
            // eslint-disable-next-line react/jsx-key
            <Card name={song.name} image={song.img} id={song._id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;