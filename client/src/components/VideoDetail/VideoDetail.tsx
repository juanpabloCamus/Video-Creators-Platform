import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar';
import './VideoDetail.css'
import { Video } from '../../types/types';
import Avatar from '@mui/material/Avatar';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

function VideoDetail() {

    const navigate = useNavigate()
    const {id} = useParams()
    const [video, setVideo] = useState<Video[]>([]);

    useEffect(()=>{
        const loggedUserJSON = sessionStorage.getItem('loggedUser');
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            axios.get(`http://localhost:3001/video/${id}`, { headers: {"Authorization" : `Bearer ${user.token}`} })
            .then((r)=>{setVideo(r.data)})
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'You must be logged to see a video',
            })
            navigate('/')
        }
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
                <Link to={`/profile/${video[0].user.id}`}>
                <div className='videoUser'>
                    <h3>{video[0].user.name}</h3>
                    <Avatar alt={video[0].user.name} src={video[0].user.photo} />
                </div>
                </Link>
            </div>
        </div>
        </>
    );
}

export default VideoDetail;