import { Controller, Post, Body } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";

@Controller('users')
export class UsersController {
    constructor(
        private usersServices: UsersService
    ) {}

    @Post('')
    async create(@Body() createUserDto: CreateUserDto ) {
        return await this.usersServices.create(createUserDto)
    }
}