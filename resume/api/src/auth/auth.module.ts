import { Module } from "@nestjs/common";
import { JwtService, JwtModule } from "@nestjs/jwt";

import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./local.strategy";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: 'secretofapplication',
            signOptions: {
                expiresIn: '1d'
            }
        })
    ],
    controllers: [
        AuthController
    ],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService
    ]
})
export class AuthModule {}