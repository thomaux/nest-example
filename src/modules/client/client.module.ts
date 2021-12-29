import { Module } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { REDIS_URL, TEST_SERVICE } from "../../common/constants";
import { ClientService } from "./client.service";

@Module({
    providers: [
        {
            provide: TEST_SERVICE,
            useFactory: () => ClientProxyFactory.create({
                transport: Transport.REDIS,
                options: {
                    url: REDIS_URL
                }
            })
        },
        ClientService
    ]
})
export class ClientModule {}