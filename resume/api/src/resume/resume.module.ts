import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ResumeSchema } from './resume.schema';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Resume', schema: ResumeSchema }
        ])
    ],
    controllers: [
        ResumeController
    ],
    providers: [
        ResumeService
    ]
})
export class ResumeModule {}
