
import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { HOST, PORT } from './common/constants';
import { ServerModule } from './modules/server/server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<TcpOptions>(
    ServerModule,
    {
      transport: Transport.TCP,
      options: {
        host: HOST,
        port: PORT
      }
    }
  );
  app.listen();
}
bootstrap();