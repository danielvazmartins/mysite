import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { CreateResumeDto } from "./create-resume.dto";
import { Resume } from "./resume.interface";

@Injectable()
export class ResumesService {
    constructor(
        @InjectModel('Resumes') private resumesModel: Model<Resume>
    ) {}

    // Retorna a lista de curriculos do usuario
    getAll(userId: string) {
        return this.resumesModel.find({
            'userId': userId
        })
        .then(result => {
            if(!result) throw new InternalServerErrorException();
            
            return ({ 
                status: 'success',
                data: result
            })
        })
    }

    // Retorna um curriculo completo
    getOne(id: string) {
        return this.resumesModel.findById(id)
        .then(result => {
            if(!result) throw new InternalServerErrorException();
            
            return ({ 
                status: 'success',
                data: result
            })
        })
    }

    // Cadastra um novo curriculo
    create(userId: string, resume: CreateResumeDto) {
        return this.resumesModel.create({
            userId,
            ...resume
        })
        .then(result => {
            if(!result) throw new InternalServerErrorException();
            
            return ({ status: 'success' })
        })
    }
}