import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt"

import * as bcrypt from "bcrypt";

import { UsersService } from "../users/users.service";
import { User } from "src/users/user.interface";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    // Faz a validação do usuário e da senha
    authenticate(username: string, password: string): Promise<User> {
        return this.usersService.findByEmail(username)
        .then(result => {
            if (!result) return null

            if (bcrypt.compareSync(password, result.password.toString())) return result
        })
    }

    // Retorna m token JWT do usuário
    getJWT(user: User): string{
        return this.jwtService.sign({
            sub: user._id,
            name: user.fullName,
            email: user.email
        })
    }
}