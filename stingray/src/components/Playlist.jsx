import React, { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components';

export default function Playlist() {
    const [{ token,playlists}, dispatch ] = useStateProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/me/playlists', 
                    {
                     headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });
                
                const { items } = response.data;
                const playlists = items.map(({ name, id }) => {
                    return { name, id };
                });
                dispatch({type:reducerCases.SET_PLAYLISTS,playlists});
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        };

        if (token) {
            getPlaylistData();
        }
    }, [token, dispatch]);

    const changeCurrentPlaylist=(selectedPlaylistsId)=>{
        dispatch({type:reducerCases.SET_PLAYLIST_ID,selectedPlaylistsId});
    }
    return (<Container>
        <ul>
            {
                playlists.map(({name,id})=>{
                    return <li key={id} onClick={()=>changeCurrentPlaylist(id)}>{name}</li>
                })
            }
        </ul>
    </Container>
    );
}

const Container= styled.div`
height:100%;
overflow:hidden;
ul{
list-style-type:none;
display:flex;
flex-direction:column;
gap:1rem;
padding:1rem;
height:57vh;
max-height:100%;
overflow:auto;
&::::-webkit-scrollbar{
    width:0.7rem;
    &-thumb{
        background-color:rgba(255,255,255,0.6);
    }
}
li{
display:flex;
gap:1rem;
cursor:pointer;
transition:0.3s ease-in-out;
&:hover{
color:white;
}}}
`
