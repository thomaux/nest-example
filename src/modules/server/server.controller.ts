import { Controller, Logger } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { TEST_EVENT } from "../../common/constants";

@Controller()
export class ServerController {
    private readonly logger = new Logger(ServerController.name);

    @EventPattern(TEST_EVENT)
    handleTestEvent() {
        this.logger.log('Test event successfully received');
    }
}