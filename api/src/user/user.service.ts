import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    async findUserById(id:number){
        console.log(id);
        const user = await this.userRepo.findBy({id});
        if(user.length === 0) throw new HttpException('USER_NOT_FOUND', 404); 
        return user
    }

}
