import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserData, VideoData } from 'src/database/Data';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/video.dto';
import { Video } from './entity/video.entity';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) private videoRepo: Repository<Video>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async getAllVideos() {
    return await this.videoRepo.find({ relations: ['user'] });
  }

  async getVideoById(id:number) {
    return await this.videoRepo.find({ where:{id: id}, relations: ['user'] });
  }

  async createVideo(video: CreateVideoDto, user: User) {
    const { url, title, description, poster ,idUser } = video;
    if (!url || !title || !description || !idUser || !poster)
      throw new HttpException('MISSING_DATA', 400);
    const newVideo = this.videoRepo.create({ ...video, user: user });
    await this.videoRepo.save(newVideo);
    return newVideo;
  }

  async editVideo(video) {
    const { url, title, description, id, poster } = video;
    if (!url || !title || !description || !id || !poster)
      throw new HttpException('MISSING_DATA', 400);

    const videoToEdit = await this.videoRepo.findOneBy({ id: id });
    if (videoToEdit === null) throw new HttpException('NOT_FOUND', 404);

    await this.videoRepo.update({ id: id }, video);

    return video;
  }

  async changeVideoStatus(id: number) {
    const video = await this.videoRepo.findOneBy({ id: id });
    if (video === null) throw new HttpException('NOT_FOUND', 404);
    !video.public ? (video.public = true) : (video.public = false);
    await this.videoRepo.save(video);
    return video;
  }

  async likeVideo(idUser, idVideo) {
    const video = await this.videoRepo.findOneBy({ id: idVideo });
    const user = await this.userRepo.findOneBy({ id: idUser });
    if (video === null || user === null)
      throw new HttpException('NOT_FOUND', 404);

    if (!user.likes.includes(parseInt(idVideo))) {
      user.likes.push(parseInt(idVideo));
      video.userLikes.push(parseInt(idUser));
      await this.userRepo.save(user);
      await this.videoRepo.save(video);
      return { user, video };
    } else {
      console.log(
        (user.likes = user.likes.filter((id) => id !== parseInt(idVideo))),
      );
      video.userLikes = video.userLikes.filter((id) => id !== parseInt(idUser));
      await this.userRepo.save(user);
      await this.videoRepo.save(video);
      return { user, video };
    }
  }

  async seedDatabase(){
    const users = this.userRepo.create(UserData);
    await this.userRepo.save(users);
    for (let i = 0; i < VideoData.length; i++) {
      const {url, title, description, poster ,userId } = VideoData[i]
      const user:User = await this.userRepo.findOneBy({id:userId})
      const video = this.videoRepo.create({...VideoData[i], user:user});
      await this.videoRepo.save(video)
    }
    return 'database loaded'
  }
}
