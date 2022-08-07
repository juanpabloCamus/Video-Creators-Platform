import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar';
import './VideoDetail.css'
import { Video } from '../../types/types';
import Avatar from '@mui/material/Avatar';

function VideoDetail() {

    const {id} = useParams()
    const [video, setVideo] = useState<Video[]>([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/video/${id}`)
        .then((r)=>{setVideo(r.data)})
    },[])
    console.log(video)
    if(video.length === 0) return <h1>Loading</h1>
    return (
        <>
        <Navbar/>
        <div className='videoDetailContainer'>
            <div className='videoPlayerContainer'>
                <ReactPlayer 
                url={video[0].url}
                controls={true} 
                />
            </div>
            <div className='userVideoContainer'>
                <div className='videoInfo'>
                    <h1>{video[0].title}</h1>
                    <p>{video[0].description}</p>
                </div>
                <div className='videoUser'>
                    <h3>{video[0].user.name}</h3>
                    <Avatar alt={video[0].user.name} src={video[0].user.photo} />
                </div>
            </div>
        </div>
        </>
    );
}

export default VideoDetail;