import { IsEmail, IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
    @IsNotEmpty()
    fullName: String

    @IsEmail({}, { message: 'Formato do e-mail inválido!'})
    email: String
}