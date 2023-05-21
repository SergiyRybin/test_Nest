import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test')
    .setDescription('Dock')
    .setVersion('0.0.1')
    .addTag('sehio')
    .build();

  const docum = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, docum);

  await app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
}
start();
