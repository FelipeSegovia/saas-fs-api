import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dtos/create-user.dto";
import {User} from "./entity/user.entity";

@ApiTags('User')
@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService) {
    }

    @Post()
    async create(@Body() newUser: CreateUserDto): Promise<User>{
        return await this.userService.create(newUser);
    }
}