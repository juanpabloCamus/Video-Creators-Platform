import { IsEmail, IsUrl} from 'class-validator';
import {Entity, Column, PrimaryGeneratedColumn,OneToMany, ManyToMany} from 'typeorm';
import { Video } from 'src/video/entity/video.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    @IsEmail()
    email:string;

    @Column()
    name:string

    @Column({length: 255})
    password:string

    @Column({nullable:true})
    @IsUrl()
    photo:string

    @Column({
        type: "enum",
        enum: ["Student", "Teacher"],
    })
    role: 'Student' | 'Teacher';

    @OneToMany(() => Video, (video) => video.user)
    video: Video[]

    @OneToMany(() => Video, (video) => video.user)
    likes: Video[]


}