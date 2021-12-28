
import { NestFactory } from '@nestjs/core';
import { ClientModule } from './modules/client/client.module';
import { ClientService } from './modules/client/client.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(ClientModule);

    const clientService = app.get(ClientService);
    clientService.publishTestEvent();

    await app.close();
}
bootstrap();