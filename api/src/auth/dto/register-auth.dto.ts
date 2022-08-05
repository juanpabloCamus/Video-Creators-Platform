import { IsEmail } from "class-validator";

export class RegisterAuthDto {
    
    @IsEmail()
    email:string;

    name:string;

    password:string;

    role: 'Student' | 'Teacher';

    photo: 'string'
}