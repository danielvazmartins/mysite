import { Controller, Post, UseGuards, Response, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req, @Response() res) {
        res.setHeader('x-access-token', req.user)
        res.status(204).send()
    }
}