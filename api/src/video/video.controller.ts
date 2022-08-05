import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(
        private videoService: VideoService
    ) {}

    
}
