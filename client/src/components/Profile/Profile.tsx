import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from "../Home/Navbar";
import './Profile.css';
import Avatar from '@mui/material/Avatar';
import { UserProfile } from "../../types/types";
import { accordionActionsClasses, Grid } from "@mui/material";
import { Container } from "@mui/system";
import VideoCard from "../Home/VideoCard";

let loggedId:number
let loggedIdJSON:any = sessionStorage.getItem('loggedUserId');
if(loggedIdJSON !== null){
    loggedId = JSON.parse(loggedIdJSON)
}

function Profile() {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const [profileUser, setProfileUser] = useState<UserProfile>()

    
    useEffect(()=>{
        const loggedUserJSON = sessionStorage.getItem('loggedUser');
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            axios.get(`http://localhost:3001/user/${id}`,{ headers: {"Authorization" : `Bearer ${user.token}`} })
            .then(r => {setProfileUser(r.data)})
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'You must be logged to access here',
            })
            navigate('/')
        }
    },[])

    
    const handleFollow = async () =>{
        // const loggedUserJSON = sessionStorage.getItem('loggedUser');
        // console.log(loggedId);
        // if(loggedUserJSON){
        //     const user = JSON.parse(loggedUserJSON)
        //     loggedId = user.user[0].id
        //     axios.post(`http://localhost:3001/user/${loggedId}/follow/${id}`,{},{ headers: {"Authorization" : `Bearer ${user.token}`} })
        // }
    }

    if(profileUser === undefined) return <h1>Loading</h1>

    return ( 
        <>
            <Navbar/>
            <div className="profileContainer">
                <div className="profileInfo">
                    <Avatar alt="Remy Sharp" src={profileUser.photo} sx={{ width: 100, height: 100 }} />
                    <div className = 'profileInfoData'>
                        <h1>{profileUser.name}</h1>
                        <h3>{profileUser.role}</h3>
                    </div>
                    {/* <button onClick={handleFollow}>
                        Follow
                    </button> */}
                </div>
                <h1>{profileUser.name} video's</h1>
                <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                {profileUser.video.map((v) => (
                    <VideoCard
                    id={v.id}
                    title={v.title}
                    description={v.description}
                    poster={v.poster}
                    public={v.public}
                    ownerId={profileUser.id}
                    />
                ))}
            </Grid>
            </Container>
            </div>
        </>
    );
}

export default Profile;