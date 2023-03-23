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
  BadRequestException,
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
  @HttpCode(400)
  create() {
    return {
      message: 'user_id phải là kiểu số number',
    };
  }
  async search(
    @Param('user_id', ParseIntPipe) user_id: number,
  ): Promise<{ message: string; data: userDto[] }> {
    try {
      return await this.userService.search(user_id);
    } catch (error) {
      throw new HttpException('Lỗi backend', 500);
    }
  }
}
