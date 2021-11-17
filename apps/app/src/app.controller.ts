import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoValidationPipe } from './dto-validation.pipe';
import { StuffDto } from './stuff.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postStuff(@Body(DtoValidationPipe.pipe) stuffDto: StuffDto) {
    const data = await this.appService.create(stuffDto);

    return { data };
  }
}
