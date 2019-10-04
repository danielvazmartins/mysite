import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Resume } from './resume.interface'

@Injectable()
export class ResumeService {
    constructor(
        @InjectModel('Resume') private readonly resumeModel: Model<Resume>
    ) {}

    async getAllResumes() {
        return await this.resumeModel.find()
    }

    async getResume(id: string) {
        return await this.resumeModel.findById(id)
    }

    async create(name: string) {
        return await this.resumeModel.create({name})
    }

    async update(_id: string, name: string) {
        return await this.resumeModel.updateOne({_id}, {name})
    }

    async delete(_id: string) {
        return await this.resumeModel.deleteOne({_id})
    }
}
