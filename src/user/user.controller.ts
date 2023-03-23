import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  HttpCode,
  ParseIntPipe,
  HttpException,
} from '@nestjs/common';

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
  ): Promise<{ message: string; data: userDto[] }> {
    try {
      return await this.userService.search(user_id);
    } catch (error) {
      throw new HttpException('Lỗi backend', 500);
    }
  }
}
