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

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/getUser/:hoTen')
  getUser(@Param('hoTen') hoTen: string): Promise<userDto[]> {
    return this.userService.getUser(hoTen);
  }

  @Get('/getBookmarkByUserId/:user_id')
  @HttpCode(200)
  create() {
    return 'OK'
  }
  getBookmarkByUserId(
    @Param('user_id') user_id: number,
    @Req() req: Response,
  ): any {
    return this.userService.getBookmarkByUserId(user_id);
  }
}
