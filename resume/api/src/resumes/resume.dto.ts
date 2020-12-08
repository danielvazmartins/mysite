import { IsNotEmpty, IsNotEmptyObject, IsString, IsDate, IsEmail } from "class-validator"

class Resume {
    @IsNotEmpty()
    name: string

    @IsString()
    occupation: string

    @IsString()
    dateOfBirth: Date

    @IsEmail()
    email: string
}

export class ResumeDto {
    @IsNotEmpty() 
    name: string

    @IsNotEmpty()
    description: string

    @IsString()
    domain: string

    @IsNotEmpty()
    model: string

    @IsNotEmpty()
    style: string

    @IsNotEmptyObject()
    resume: Resume
}