import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService:JwtService
    ){}

    //! REGISTER
    async register(user:RegisterAuthDto){
        const {email, name, password, role} = user;
        if (!email || !name || !password || !role) throw new HttpException('MISSING_DATA', 400);

        if(!/^[a-zA-Z0-9_\-\.]+@+[a-zA-Z]+.com/.test(email)) throw new HttpException('INVALID_EMAIL', 400);

        const checkEmail = this.userRepo.findBy({email:email});
        if((await checkEmail).length !== 0) throw new HttpException('EMAIL_ALREADY_REGISTERED', 400);

        const plainToHash = await hash(password, 10);
        user = {...user, password:plainToHash};

        const newUser = this.userRepo.create(user)
        await this.userRepo.save(newUser)
        return newUser
    }

    //! LOGIN
    async login(user:LoginAuthDto){
        const { email, password } = user

        if (!email  || !password ) throw new HttpException('MISSING_DATA', 400);

        const findUser = await this.userRepo.findBy({email:email});
        if(findUser.length === 0) throw new HttpException('USER_NOT_FOUND', 404);
        
        const checkPassword = await compare(password, findUser[0].password)
        if(!checkPassword) throw new HttpException('PASSWORD_INCORECT', 403)

        const payload = {id:findUser[0].id, name:findUser[0].name}
        const token = this.jwtService.sign(payload)

        const data = {
            user:findUser,
            token
        }

        return data;
    }
}
