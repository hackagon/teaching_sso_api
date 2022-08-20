import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  app.setGlobalPrefix('api')

  await app.listen(3000, () => {
    console.log("Server is running");
    console.table({
      port: 3000,
      environment: "dev",
      database: "localhost"
    })
  });
}
bootstrap();
