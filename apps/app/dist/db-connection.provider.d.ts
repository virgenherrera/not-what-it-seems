import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
export declare class DbConnectionProvider implements MongooseOptionsFactory {
    private configService;
    static forRootAsync(): import("@nestjs/common").DynamicModule;
    constructor(configService: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
