import { Controller, Post, Body, Put, Get, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user-dto";

@Controller('users')
export class UsersController {
    constructor(
        private usersServices: UsersService
    ) {}

    // Cadastro de novo usuário (Pública)
    @Post('')
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersServices.create(createUserDto)
    }

    // Retorna os dados do usuário logado
    @UseGuards(AuthGuard('jwt'))
    @Get('')
    async getOne(@Request() req) {
        const userId = req.user.id
        return await this.usersServices.findById(userId)
    }

    // Altera os dados do cadastro
    @UseGuards(AuthGuard('jwt'))
    @Put('')
    async update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
        const userId = req.user.id
        return await this.usersServices.update(userId, updateUserDto)
    }
}