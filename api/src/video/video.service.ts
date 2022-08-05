import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/video.dto';
import { Video } from './entity/video.entity';

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(Video) private videoRepo: Repository<Video>,
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    async getAllVideos(){
        return this.videoRepo.find({relations:['user']})
    }
    
    async createVideo(video:CreateVideoDto, user:User){
        const {url, title, description, idUser} = video;
        if(!url || !title || !description || !idUser) throw new HttpException('MISSING_DATA', 400);
        const newVideo = this.videoRepo.create({...video,user:user});
        await this.videoRepo.save(newVideo);
        return newVideo;
    }

    async changeVideoStatus(id:number){
        const video = await this.videoRepo.findOneBy({id:id})
        if(video === null) throw new HttpException('NOT_FOUND', 404);
        !video.public ? video.public = true : video.public = false
        await this.videoRepo.save(video)
        return video
    }
}
