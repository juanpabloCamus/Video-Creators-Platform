import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    //! REGISTER
    async register(user:RegisterAuthDto){
        const { password } = user;
        const plainToHash = await hash(password, 10);
        user = {...user, password:plainToHash};
        return this.userRepo.create(user)
    }

    //! LOGIN
    async login(user:LoginAuthDto){
        
    }
}
