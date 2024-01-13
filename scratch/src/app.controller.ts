import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/asdf')
    getRootRoutes() {
        return 'hi There!';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}
