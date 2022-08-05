import { IsDate, isDate, IsUrl } from 'class-validator';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,} from 'typeorm';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Video {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsUrl()
    url:string

    @Column()
    title:string

    @Column()
    description:string

    @Column({default:0})
    likes: number

    @Column()
    @IsDate()
    creation_date: Date

    @Column({default:true})
    public:boolean

    @ManyToOne(() => User, (user) => user.video)
    user: User

}