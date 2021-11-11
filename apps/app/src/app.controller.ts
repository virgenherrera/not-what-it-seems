import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoValidationPipe } from './dto-validation.pipe';
import { StuffDto } from './stuff.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postStuff(@Body(DtoValidationPipe.pipe) stuff: StuffDto) {
    console.log(stuff);

    return { data: stuff };
  }
}
