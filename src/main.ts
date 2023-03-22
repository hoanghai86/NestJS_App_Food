import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //cho phép FE truy cập vào API
  app.use(express.static('.')); //định vị đường dẫn để load tài nguyên
  await app.listen(8080);
}
bootstrap();
