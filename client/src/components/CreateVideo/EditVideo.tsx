import Navbar from "../Home/Navbar";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';

let loggedId:number
let loggedIdJSON:any = sessionStorage.getItem('loggedUserId');
if(loggedIdJSON !== null){
    loggedId = JSON.parse(loggedIdJSON)
}

function EditVideo() {

    const {id} = useParams()
    const navigate = useNavigate()

    const [video, setVideo] = React.useState({
        description:"Loading...",
        id:0,
        poster:'Loading...',
        title:'Loading...',
        url:'Loading...',
        public:false,
        loggedId:loggedId
    })
    
    React.useEffect(()=>{
        setLoading(true)
        const loggedUserJSON = sessionStorage.getItem('loggedUser');
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            axios.get(`http://localhost:3001/video/${id}`, { headers: {"Authorization" : `Bearer ${user.token}`} })
            .then(r => setVideo(r.data[0]))
        }
        setLoading(false)
    }, [])

    const [loading, setLoading] = React.useState(false);

    const handleChange = (e:any) => {
        e.preventDefault();
        if(e.target.name === 'public'){
            if(e.target.value === 0){
                return setVideo({...video, public:false})
            }else{
                return setVideo({...video, public:true})
            }
        }
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        const loggedUserJSON = sessionStorage.getItem('loggedUser');
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            await axios.put('http://localhost:3001/video',video, { headers: {"Authorization" : `Bearer ${user.token}`} })
            .then(() => Swal.fire({
                icon: 'success',
                title: 'Your video successfully uploaded'
            }))
            .catch(e => Swal.fire({
                icon: 'error',
                title: 'An error has occurred',
                text: e.response.data.message
            }))
            setLoading(false)
        }    
    }

    return (
        <>
            <Navbar/>
            <div className="formContainer">
                <h1>Edit video</h1>
                <form onSubmit={handleSubmit}>
                    <TextField value={video.title} onChange={handleChange} id="outlined-basic" name='title' label="Title *" variant="outlined" />
                    <TextField value={video.description} onChange={handleChange} id="outlined-basic" name='description' label="Description *" variant="outlined" />
                    <TextField value={video.url} onChange={handleChange} id="outlined-basic" name='url' label="Url *" variant="outlined" />
                    <TextField value={video.poster} onChange={handleChange} id="outlined-basic" name='poster' label="Poster *" variant="outlined" />
                    <select name="public" onChange={handleChange}>
                        <option selected value={0}>Private</option>
                        <option value={1}>Public</option>
                    </select>
                    <LoadingButton
                        onClick={handleSubmit}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </LoadingButton>
                </form> 
            </div>
        </>
    );
}


export default EditVideo;