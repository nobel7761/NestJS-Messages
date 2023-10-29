import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //! step 1
  // we can apply a pipe to just one single route handler if we want to, but in this case, we want to attempt to validate all incoming requests.
  // we declared the ValidationPipe() globally so that the validation pipe will attempt to validate every single incoming request that comes inot our application.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
