import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    //Find user by ID
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findUserById(@Param() id){
        return this.userService.findUserById(id.id)
    }




}
