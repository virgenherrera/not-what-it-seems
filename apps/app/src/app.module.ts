import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnectionProvider } from './db-connection.provider';
import { Stuff, StuffSchema } from './schemas/stuff.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: join(__dirname, '../../../.env'),
    }),
    DbConnectionProvider.forRootAsync(),
    MongooseModule.forFeature([{ name: Stuff.name, schema: StuffSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
