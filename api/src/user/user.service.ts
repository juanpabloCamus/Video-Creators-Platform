import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findUserById(id: number) {
    const user = await this.userRepo.findOne({
      where: { id: id },
      relations: ['video'],
    });
    if (user === null) throw new HttpException('USER_NOT_FOUND', 404);
    return user;
  }

  async followUser(idFollower: number, idFollowing: number) {
    const follower = await this.userRepo.findOneBy({ id: idFollower });
    const following = await this.userRepo.findOneBy({ id: idFollowing });
    if (follower === null || following === null)
      throw new HttpException('USER_NOT_FOUND', 404);

    if (!follower.following.includes(idFollowing)) {
      follower.following.push(idFollowing);
      following.followers.push(idFollower);
      await this.userRepo.save(follower);
      await this.userRepo.save(following);
      return { follower, following };
    } else {
      follower.following = follower.following.filter(
        (id) => id !== idFollowing,
      );
      follower.following = following.followers.filter(
        (id) => id !== idFollower,
      );
      await this.userRepo.save(follower);
      await this.userRepo.save(following);
      return { follower, following };
    }
  }
}
