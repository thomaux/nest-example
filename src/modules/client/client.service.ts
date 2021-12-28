import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { TEST_EVENT, TEST_SERVICE } from "../../common/constants";

@Injectable()
export class ClientService {
    private readonly logger = new Logger(ClientService.name);

    constructor(@Inject(TEST_SERVICE) private client: ClientProxy) {}

    publishTestEvent(): void {
        this.logger.log('Publishing event');
        this.client.emit<string>(TEST_EVENT, {});
    }
}