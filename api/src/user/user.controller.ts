import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(){
        //return this.userService.findAll()
        return 'sa'
    }



}
