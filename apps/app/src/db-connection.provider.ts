import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  MongooseModule,
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { parse } from 'url';

@Injectable()
export class DbConnectionProvider implements MongooseOptionsFactory {
  static forRootAsync() {
    return MongooseModule.forRootAsync({
      useClass: DbConnectionProvider,
      imports: [ConfigModule],
    });
  }
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const MONGO_URI = this.configService.get<string>('MONGO_URI');

    if (!MONGO_URI) {
      throw new Error('forgot to provide MONGO_URI env variable.');
    }

    const url = parse(MONGO_URI, false);

    if (url.protocol !== 'mongodb:' || !url.auth || !url.port || !url.path) {
      throw new Error(
        'you provided and invalid formatted MONGO_URI env variable.',
      );
    }

    return { uri: url.href };
  }
}
