import { AuthGuard } from '@nestjs/passport';
import { FileUploadDto, userDto } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  HttpCode,
  ParseIntPipe,
  HttpException,
  Post,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFile,
  Headers,
} from '@nestjs/common';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('User') //tạo group API trên trang swagger
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth('Authorization') //tạo swagger khóa API
  @UseGuards(AuthGuard('jwt')) //Decorator của NestJS để khóa API, code khóa nằm trong file jwt.strategy
  @Get('/getUser/:hoTen')
  getUser(@Req() req: Request, @Param('hoTen') hoTen: string, @Headers("Authorization") Authorization: string): any {
    try {
      // let token = req.user;
      // console.log(token);
      // return token;
      return this.userService.getUser(hoTen);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @Get('/getFood')
  getFood(): string {
    return 'get food';
  }

  //làm nút upload trên giao diện swagger
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File',
    type: FileUploadDto,
  })
  //làm upload trên postman
  @UseInterceptors(
    FileInterceptor('fileUpload', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img', //định nghĩa nơi lưu file hình
        filename: (req, file, cb) => {
          cb(null, Date.now() + file.originalname); //đổi tên file
        },
      }),
    }),
  )
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File): Express.Multer.File {
    return file;
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
