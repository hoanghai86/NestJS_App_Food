import { userDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Controller, Get, Param, HttpCode } from '@nestjs/common';

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
    return 'Success!';
  }
  getBookmarkByUserId(@Param('user_id') user_id: number): Promise<userDto[]> {
    return this.userService.getBookmarkByUserId(user_id);
  }
}
