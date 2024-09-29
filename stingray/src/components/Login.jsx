import React from 'react'
import styled from 'styled-components';
export default function Login() {
  const handleClick=() =>{
    const clientID="4403afcdbd094d4a9635676be8b127f2";
    const redirectUrl="http://localhost:3000/";
    const apiUrl="https://accounts.spotify.com/authorize";
    const scope=[
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
"user-top-read" 
    ];
    window.location.href=`${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return <Container>
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" alt="Spotify" srcset="" />
    <button onClick={handleClick}>Connect Spotify</button>
  </Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100vw;
    background-color:#111;
    gap: 5rem;
    img{
        height:20vh;
    }
    button{
        padding:1rem 5rem;
        border-radius:5rem;
        border:none;
        background-color:#49f585;
        color:black;
        font-size:1.4rem;
        cursor: pointer;
    }
`;
