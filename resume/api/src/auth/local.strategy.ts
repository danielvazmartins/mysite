import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"

import { Strategy } from "passport-local"

import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy  extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService
    ) {
        super()
    }

    // Método executado pelo guarda de rota do login
    validate(username: string, password: string) {
        // Se autenticar o usuário é adicionado no objeto user da request
        return this.authService.authenticate(username, password)
        .then(user => this.authService.getJWT(user))
    }
}