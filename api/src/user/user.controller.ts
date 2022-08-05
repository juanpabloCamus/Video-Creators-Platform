import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Post()
    createUser(@Body() user:createUserDto){
        return this.userService.createUser(user)
    }

}
