import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";

let loggedId:number
let loggedIdJSON:any = sessionStorage.getItem('loggedUserId');
if(loggedIdJSON !== null){
    loggedId = JSON.parse(loggedIdJSON)
}

function VideoCard(props: {id:number, title:string, description: string, poster:string, public:boolean,ownerId:number}) {

    const navigate = useNavigate()

    return ( 
        <Grid item key={props.id} xs={12} sm={4} md={4}>   
            <Card
            sx={{ width:'100%', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
                component="img"
                image={props.poster}
                alt="random"
                height={'50%'}
            />
            <CardContent sx={{ flexGrow: 0 }}>
                <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                </Typography>
                <Typography>
                {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={()=>{navigate(`/home/${props.id}`)}}
                >View
                </Button>
                {
                    loggedId === props.ownerId ? 
                        <Button>
                            Edit
                        </Button>
                    : 
                    null 
                }
            </CardActions>
        </Card>
        </Grid>
    
        
    );
}

export default VideoCard;