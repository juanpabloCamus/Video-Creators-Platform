import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findUserById(@Param() id) {
    return this.userService.findUserById(id.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':idFollower/follow/:idFollowing')
  followUser(@Param() id) {
    const { idFollower, idFollowing } = id;
    return this.userService.followUser(
      parseInt(idFollower),
      parseInt(idFollowing),
    );
  }
}
