import { IsDate, isDate, IsUrl } from 'class-validator';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany,JoinTable,OneToMany} from 'typeorm';
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

    @Column({default:false})
    public:boolean

    @ManyToOne(() => User, (user) => user.video)
    user: User

    @Column("int", { array: true , nullable:true, default:[]})
    userLikes: number[];

}