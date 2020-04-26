import { IsNotEmpty, IsString } from "class-validator"

export class CreateResumeDto {
    @IsNotEmpty() 
    name: string

    @IsString()
    description: string
}