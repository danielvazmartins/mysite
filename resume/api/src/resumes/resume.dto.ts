import { IsNotEmpty, IsNotEmptyObject } from "class-validator"

class Resume {
    @IsNotEmpty()
    name: string
}

export class ResumeDto {
    @IsNotEmpty() 
    name: string

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    model: string

    @IsNotEmpty()
    style: string

    @IsNotEmptyObject()
    resume: Resume
}