import { Model } from 'mongoose';
import { Stuff, StuffDocument } from './schemas/stuff.schema';
import { StuffDto } from './stuff.dto';
export declare class AppService {
    private stuffModel;
    constructor(stuffModel: Model<StuffDocument>);
    create(stuffDto: StuffDto): Promise<Stuff & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
