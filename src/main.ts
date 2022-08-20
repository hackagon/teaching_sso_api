import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
      validationError: {
        target: false,
      },
    }),
  );

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
