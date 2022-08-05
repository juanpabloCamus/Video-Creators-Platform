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
        const user = await this.userRepo.findOne({where:{id:id},relations:['video']})
        if(user === null) throw new HttpException('USER_NOT_FOUND', 404); 
        return user
    }

}
