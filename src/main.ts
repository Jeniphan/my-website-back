import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const PROT = process.env.PROT || 3002;
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );
  // app.enableCors();

  await app.listen(PROT, '0.0.0.0');
  console.log(`http://localhost:${PROT}`);
  console.log(`${await app.getUrl()}`);
}
bootstrap();
