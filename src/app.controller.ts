import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getNumber/:number1/:number2')
  getNumber(
    @Param('number1') number1: number,
    @Param('number2') number2: number,
  ): number {
    // return this.appService.getNumber();
    return Number(number1) + Number(number2);
  }
}
