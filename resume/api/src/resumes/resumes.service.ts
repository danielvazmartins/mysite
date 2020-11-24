import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { ResumeDto } from "./resume.dto";
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

    // Retorna um curriculo completo
    getByHost(domain: string) {
        return this.resumesModel.findOne({
            domain
        })
        .then(result => {
            if(!result) throw new NotFoundException
            
            return ({ 
                status: 'success',
                data: result
            })
        })
    }

    // Cadastra um novo curriculo
    create(userId: string, resume: ResumeDto) {
        return this.resumesModel.create({
            userId,
            ...resume
        })
        .then(result => {
            if(!result) throw new InternalServerErrorException();
            
            return ({ status: 'success' })
        })
    }

    // Atualiza um currículo
    update(userId: string, resumeId: string, resume: ResumeDto) {
        return this.resumesModel.updateOne({userId, _id: resumeId}, resume)
        .then(result => {
            if(!result) throw new InternalServerErrorException();

            return ({ status: 'success' })
        })
        .catch(error => {
            console.log(error.message)
            throw new InternalServerErrorException()
        })
    }

    // Remove um currículo
    delete(userId: string, resumeId: string) {
        return this.resumesModel.deleteOne({userId, _id: resumeId})
        .then(result => {
            if(!result) throw new InternalServerErrorException();

            return ({ status: 'success' })
        })
    }
}