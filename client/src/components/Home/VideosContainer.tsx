import * as React from 'react';
import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VideoCard from './VideoCard';
import axios from 'axios';

const theme = createTheme();

interface VideoInterface{
    id:number;
    title:string;
    description:string;
    poster:string;
    public:boolean;
}

export default function VideosContainer() {

    const [currentVideos, setCurrentVideos] = useState<VideoInterface[]>([])

    useEffect(()=>{
        axios.get('http://localhost:3001/video')
        .then(r => {setCurrentVideos(r.data)})
    }, [])

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {currentVideos.map((v) => (
                    <VideoCard
                    id={v.id}
                    title={v.title}
                    description={v.description}
                    poster={v.poster}
                    public={v.public}
                    />
                ))}
            </Grid>
            </Container>
        </main>
        </ThemeProvider>
    );
    }