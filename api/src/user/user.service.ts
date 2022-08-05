import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    findAll(){
        this.userRepo.find()
    }

    //Register//
    async createUser(user:createUserDto){
        const {email, name, password, role} = user

        if (!email || !name || !password || !role) return ('missing data')

        //TODO regex pass

        //Check in DB if email exists
        const checkEmail = this.userRepo.findBy({email:email});
        if((await checkEmail).length !== 0) return 'This email already registered';

        try{
            const newUser = this.userRepo.create(user);
            await this.userRepo.save(newUser)
            return newUser
        }catch(e){
            console.log(e);
            return e
        }
    }
}
