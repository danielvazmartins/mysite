import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    fullName: String

    @IsEmail({}, { message: 'Formato do e-mail inválido!'})
    email: String

    @MinLength(6, { message: 'A senha deve conter no mínimo 6 caracteres!'})
    password: String
}