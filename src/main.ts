import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //cho phép FE truy cập vào API
  app.use(express.static('.')); //định vị đường dẫn để load tài nguyên


  //setup swagger
  const config = new DocumentBuilder().setTitle('Swagger').setVersion("2.0.0").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  //localhost:8080/api
  await app.listen(8080);
}
bootstrap();
