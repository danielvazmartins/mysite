import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Adiciona um prefixo para todas requisicões
	app.setGlobalPrefix('api')

	// Aplica regras de validação nas requisições usando DTO
	app.useGlobalPipes(new ValidationPipe({
		whitelist: true
	}))

  	await app.listen(3000);
}
bootstrap();
