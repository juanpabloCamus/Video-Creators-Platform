import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('register')
    registerUser(@Body() user:RegisterAuthDto){
        return this.authService.register(user)
    }

    @Post('login')
    loginUser(@Body() user:LoginAuthDto){
        return this.authService.login(user)
    }

}
