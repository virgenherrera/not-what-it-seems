import { AppService } from './app.service';
import { StuffDto } from './stuff.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    postStuff(stuffDto: StuffDto): Promise<{
        data: import("./schemas/stuff.schema").Stuff & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
}
