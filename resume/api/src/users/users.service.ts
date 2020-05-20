import { Injectable, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import * as bcrypt from "bcrypt";
import { Model } from "mongoose";

import { User } from "./user.interface";
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user-dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private readonly usersModel: Model<User>
    ) {}

    // Busca um usuário
    async findByEmail(email: string) {
        return await this.usersModel.findOne({
            email
        })
    }

    async findById(id: string) {
        return this.usersModel.findById(id, '-password')
        .then(result => {
            if(!result) throw new InternalServerErrorException();
            
            return ({ 
                status: 'success',
                data: result
            })
        })
    }

    // Cadastro de usuário
    create(createUserDto: CreateUserDto) {
        return this.usersModel.findOne({
            email: createUserDto.email
        }).then(result => {
            if(result) throw new HttpException('E-mail já cadastrado!', HttpStatus.FORBIDDEN);

            // Gera um hash do password antes de salvar
            createUserDto.password = bcrypt.hashSync(createUserDto.password, 10)

            // Cria novo usuário
            return this.usersModel.create(createUserDto)
            .then(result => {
                if(!result) throw new InternalServerErrorException();
                
                return ({ status: 'success' })
            })
        })
    }

    // Atualiza os dados
    update(_id: string, updateUserDto: UpdateUserDto){
        return this.usersModel.updateOne({_id}, updateUserDto)
        .then(result => {
            if(!result) throw new InternalServerErrorException();

            return ({ status: 'success' })
        })
    }
}