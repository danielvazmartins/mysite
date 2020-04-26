import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ResumesController } from "./resumes.controller";
import { ResumesSchema } from "./resumes.schema";
import { ResumesService } from "./resumes.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Resumes', schema: ResumesSchema }
        ])
    ],
    controllers: [
        ResumesController
    ],
    providers: [
        ResumesService
    ]
})
export class ResumesModule {}