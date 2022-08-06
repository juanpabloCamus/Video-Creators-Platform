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

