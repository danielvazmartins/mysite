import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretofapplication'
        })
    }

    // Método executado pelo guarda de rota que exige autenticacao
    validate(payload: any) {
        return {
            id: payload.sub, 
            name: payload.name,
            email: payload.email
        }
    }
}