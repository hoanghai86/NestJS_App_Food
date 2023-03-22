import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  HttpCode,
  Req,
  ParseIntPipe,
  Res,
  HttpException,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/getUser/:hoTen')
  getUser(@Param('hoTen') hoTen: string): Promise<userDto[]> {
    return this.userService.getUser(hoTen);
  }

  @Get('/search/:user_id')
  async search(
    @Param('user_id', ParseIntPipe) user_id: number,
    // @Res() res: Response,
    // @Req() req: Request,
  ) {
    const data = await this.userService.search(user_id);
    if (data) {
      return data;
    } else {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST);
    }
  }
}
