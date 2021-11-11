import { AppService } from './app.service';
import { StuffDto } from './stuff.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postStuff(stuff: StuffDto): {
        data: StuffDto;
    };
}
