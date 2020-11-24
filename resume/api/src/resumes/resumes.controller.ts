import { Controller, Get, Post, Body, Param, UseGuards, Request, Put, Delete, Query } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { ResumeDto } from "./resume.dto";
import { ResumesService } from "./resumes.service";

@Controller('resumes')
export class ResumesController {
    constructor(
        private resumesService: ResumesService
    ) {}

    // Retorna a lista de currículos do usuario
    @UseGuards(AuthGuard('jwt'))
    @Get('')
    async getAll(@Request() req) {
        const userId = req.user.id
        return await this.resumesService.getAll(userId)
    }

    // Retorna um curriculo completo (Publica)
    @Get('public')
    async getByHost(@Query('domain') domain:string) {
        return await this.resumesService.getByHost(domain)
    }

    // Retorna um curriculo completo (Publica)
    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.resumesService.getOne(id)
    }

    // Cadastra um novo currículo
    @UseGuards(AuthGuard('jwt'))
    @Post('')
    async create(@Request() req, @Body() resume: ResumeDto) {
        const userId = req.user.id
        return await this.resumesService.create(userId, resume)
    }

    // Atualiza um currículo
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Request() req, @Param('id') resumeId: string, @Body() resume: ResumeDto) {
        const userId = req.user.id
        return await this.resumesService.update(userId, resumeId, resume)
    }

    // Remove um currículo
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Request() req, @Param('id') resumeId: string) {
        const userId = req.user.id
        return await this.resumesService.delete(userId, resumeId)
    }
}