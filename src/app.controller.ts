import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

class BodyApp {
  @ApiProperty({ description: 'idBody', type: Number })
  idBody: number;

  @ApiProperty({ description: 'hoten', type: String })
  hoTen: string;
}

@ApiTags('App') //tạo group API trên trang swagger
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @ApiParam({name: "idParams"})
  @Get('/getHello/:idParams')
  getHello(
    @Req() req: Request,
    @Param('idParams') paramId: string,
    @Query('idQuery') queryId: string,
    @Body() body: BodyApp,  //swagger không cho phép phương thức GET dùng body, chỉ có POST mới dùng body
  ): string {
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
