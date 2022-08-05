import { User } from "src/user/entity/user.entity";

export class CreateVideoDto{
    url:string;
    title:string;
    description:string;
    idUser:User
}