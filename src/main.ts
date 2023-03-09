import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  let Port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(Port);
  console.log("Listen Port >>>", Port);
}
bootstrap();
