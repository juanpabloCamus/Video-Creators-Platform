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
        email: string | undefined;
        name: string | undefined;
        role: 'Student' | 'Teacher' | undefined;
        photo?: string | undefined;
    }
} 

