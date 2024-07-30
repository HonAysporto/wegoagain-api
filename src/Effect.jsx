import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import './styles.css';


const Effect = () => {
  let endpoint = "https://jsonplaceholder.typicode.com/users";
  let endpoint2 = 'https://robo-music-api.onrender.com/music/my-api';

  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const audioRefs = useRef([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(endpoint2).then((response) => {
      console.log(response.data);
      setdata(response.data);
      setisLoading(false);
    });
  };

    const handlePlay = (index) => {
    // Pause all audio elements except the one being played
    audioRefs.current.forEach((audio, idx) => {
      if (idx !== index && audio) {
        audio.pause();
      }
    });
  };

  return (
    <>
      <div className="main-container">
      <h1>Honourable Play</h1>
      {isLoading ? (
        <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." />
      ) : (
        data.map((user, index) => (
          <div className="song-item" key={user.id}>
            <img
              className="song-image"
              src={user.songImage}
              alt={user.songTitle}
            />
            <h1>Song Title: {user.songTitle}</h1>
            <strong>Release date: {user.releaseDate}</strong>
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={user.songUrl}
              controls
              onPlay={() => handlePlay(index)}
            ></audio>
            <a href={user.songUrl} download={user.songTitle}>Download</a>
          </div>
        ))
      )}
    </div>
    
   
    </>
  );
};

export default Effect;
