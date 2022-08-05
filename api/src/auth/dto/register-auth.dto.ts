export class RegisterAuthDto {
    email:string;
    name:string;
    password:string;
    role: 'Student' | 'Teacher';
    photo: string
}