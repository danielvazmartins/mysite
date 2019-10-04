import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
    constructor(
        private resumeService: ResumeService
    ) {}

    @Get()
    async getAll() {
        return await this.resumeService.getAllResumes()
    }

    @Get(':id')
    async getResume(@Param('id') id: string) {
        return await this.resumeService.getResume(id)
    }

    @Post()
    async create(@Body() params) {
        return await this.resumeService.create(params.name)
    }

    @Put()
    async update(@Body() params) {
        return await this.resumeService.update(params.id, params.name)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.resumeService.delete(id)
    }
}
