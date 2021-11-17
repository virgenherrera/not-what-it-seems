import { Document } from 'mongoose';
export declare type StuffDocument = Stuff & Document;
export declare class Stuff {
    eids: string[];
}
export declare const StuffSchema: import("mongoose").Schema<Document<Stuff, any, any>, import("mongoose").Model<Document<Stuff, any, any>, any, any, any>, {}>;
