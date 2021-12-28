import { Module } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { HOST, PORT, TEST_SERVICE } from "../../common/constants";
import { ClientService } from "./client.service";

@Module({
    providers: [
        {
            provide: TEST_SERVICE,
            useFactory: () => ClientProxyFactory.create({
                transport: Transport.TCP,
                options: {
                    host: HOST,
                    port: PORT
                }
            })
        },
        ClientService
    ]
})
export class ClientModule {}