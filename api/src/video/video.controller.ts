import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateVideoDto } from './dto/video.dto';
import { VideoService } from './video.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllVideos() {
    return this.videoService.getAllVideos();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getVideoById(@Param() {id}) {
    return this.videoService.getVideoById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createVideo(@Body() video: CreateVideoDto) {
    return this.videoService.createVideo(video, video.idUser);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  editVideo(@Body() video: CreateVideoDto) {
    return this.videoService.editVideo(video);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  changeVideoStatus(@Param() id) {
    return this.videoService.changeVideoStatus(id.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':idUser/fav/:idVideo')
  likeVideo(@Param() id) {
    console.log(id);
    const { idUser, idVideo } = id;
    return this.videoService.likeVideo(idUser, idVideo);
  }
}
