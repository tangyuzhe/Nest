import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function index() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const options = new DocumentBuilder()
    .setTitle('毕设接口文档')
    .setDescription('Swagger接口文档') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    // .setBasePath('http://localhost:5000')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/v1/api', app, document);
  await app.listen(5000);
}
index();
