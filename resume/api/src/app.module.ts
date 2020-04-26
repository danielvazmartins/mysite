import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as config from 'config';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ResumesModule } from './resumes/resumes.module';

const mongobConnection = config.get<string>('database.connection')

@Module({
    imports: [
        MongooseModule.forRoot(mongobConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }),
        UsersModule,
        AuthModule,
        ResumesModule
    ]
})
export class AppModule {}
