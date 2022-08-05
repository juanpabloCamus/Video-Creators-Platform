import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from './entity/video.entity';

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(Video) private videoRepo: Repository<Video>,
    ){}
    
}
