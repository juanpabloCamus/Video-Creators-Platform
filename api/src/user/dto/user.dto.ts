export class createUserDto {
    email:string;
    name:string;
    password:string;
    role: 'Student' | 'Teacher';
    photo: 'string'
}