export interface RegisterUser {
    email: string;
    name: string;
    password: string;
    role: 'Student' | 'Teacher';
    photo?: string;
}
export interface LoginUser{
    email: string;
    password: string;
}
export interface Video {
    id:string | undefined;
    url:string | undefined;
    title:string | undefined;
    description:string | undefined;
    poster:string | undefined;
    user:{
        id:string;
        email: string | undefined;
        name: string | undefined;
        role: 'Student' | 'Teacher' | undefined;
        photo?: string | undefined;
    }
}
export interface UploadVideo {
    idUser:any
    url:string 
    title:string;
    description:string 
    poster:string ;
    public:boolean;
}

export interface UserProfile {
    id:number;
    email: string | undefined;
    name: string | undefined;
    role: 'Student' | 'Teacher' | undefined;
    photo: string ;
    likes:[];
    followers:[];
    following:[];
    video:[{
        id:any;
        url:any;
        title:any;
        description:any;
        poster:any;
        public:any;
        userLikes:any
    }]
}

