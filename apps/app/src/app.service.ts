import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stuff, StuffDocument } from './schemas/stuff.schema';
import { StuffDto } from './stuff.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Stuff.name) private stuffModel: Model<StuffDocument>,
  ) {}

  async create(stuffDto: StuffDto) {
    return await this.stuffModel.create(stuffDto);
  }
}
