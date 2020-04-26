import { Controller, Get, Post, Body, Param, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { CreateResumeDto } from "./create-resume.dto";
import { ResumesService } from "./resumes.service";

@Controller('resumes')
export class ResumesController {
    constructor(
        private resumesService: ResumesService
    ) {}

    // Retorna a lista de curriculos do usuario
    @UseGuards(AuthGuard('jwt'))
    @Get('')
    async getAll(@Request() req) {
        const userId = req.user.id
        return await this.resumesService.getAll(userId)
    }

    // Retorna um curriculo completo (Publica)
    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.resumesService.getOne(id)
    }

    // Cadastra um novo curriculo
    @UseGuards(AuthGuard('jwt'))
    @Post('')
    async create(@Request() req, @Body() resume: CreateResumeDto) {
        const userId = req.user.id
        return await this.resumesService.create(userId, resume)
    }
}