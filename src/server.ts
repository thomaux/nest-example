
import { NestFactory } from '@nestjs/core';
import { RedisOptions, Transport } from '@nestjs/microservices';
import { REDIS_URL } from './common/constants';
import { ServerModule } from './modules/server/server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<RedisOptions>(
    ServerModule,
    {
      transport: Transport.REDIS,
      options: {
        url: REDIS_URL
      }
    }
  );
  app.listen();
}
bootstrap();