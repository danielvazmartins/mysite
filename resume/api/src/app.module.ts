import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResumeModule } from './resume/resume.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/resume'),
        ResumeModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
