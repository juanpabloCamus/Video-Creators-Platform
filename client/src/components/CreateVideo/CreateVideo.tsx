import Navbar from "../Home/Navbar";
import TextField from '@mui/material/TextField';
import './CreateVideo.css'
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { UploadVideo } from "../../types/types";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router";

function CreateVideo() {

    const navigate = useNavigate()
    const {id} = useParams()

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
        setLoading(true)
        const loggedUserJSON = sessionStorage.getItem('loggedUser');
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            await axios.post('http://localhost:3001/video',video, { headers: {"Authorization" : `Bearer ${user.token}`} })
            .then(() => Swal.fire({
                icon: 'success',
                title: 'Your video successfully uploaded'
            }))
            .catch(e => Swal.fire({
                icon: 'error',
                title: 'An error has occurred',
                text: e.response.data.message
            }))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'You must be logged to update a video',
            })
            navigate('/')
        }
        setLoading(false)
    }

    const [video, setVideo] = React.useState<UploadVideo>({
        idUser:id,
        url:'',
        title:'',
        description:'',
        poster:'',
        public:false
    })

    return (
        <>
            <Navbar/>
            <div className="formContainer">
                <h1>Upload video</h1>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={handleChange} id="outlined-basic" name='title' label="Title *" variant="outlined" />
                    <TextField onChange={handleChange} id="outlined-basic" name='description' label="Description *" variant="outlined" />
                    <TextField onChange={handleChange} id="outlined-basic" name='url' label="Url *" variant="outlined" />
                    <TextField onChange={handleChange} id="outlined-basic" name='poster' label="Poster *" variant="outlined" />
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

export default CreateVideo;