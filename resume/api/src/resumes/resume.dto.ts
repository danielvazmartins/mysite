import { IsNotEmpty, IsNotEmptyObject, IsString, IsEmail, IsNumber, IsArray } from "class-validator"

class SkillGroup {
    @IsString()
    skillType: string

    @IsArray()
    skillNames: Array<string>
}

class Resume {
    @IsNotEmpty()
    name: string

    @IsString()
    occupation: string

    @IsString()
    dateOfBirth: Date

    @IsEmail()
    email: string

    @IsNumber()
    mobile: number

    @IsNumber()
    mobile2: number

    @IsString()
    address: string

    @IsString()
    aboutMe: string

    @IsString()
    professionalGoals: string

    @IsArray()
    skills: SkillGroup[]
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