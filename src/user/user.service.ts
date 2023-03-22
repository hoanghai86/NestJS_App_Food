import { userDto } from './dto/user.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

@Injectable()
export class UserService {
  private prisma: PrismaClient = new PrismaClient();

  getUser(hoTen: string): Promise<userDto[]> {
    return this.prisma.user.findMany({
      where: { full_name: { contains: hoTen } },
    });
  }

  //code sai chỗ nào
  async search(user_id: number): Promise<userDto> {
    try {
      const data = await this.prisma.user.findMany({
        where: {
          user_id: Number(user_id),
        },
      });
      const message: string = 'Tìm kiếm thành công';
      if (data) {
        return [message, data];
      }
    } catch (error) {
      // console.log(error);
      throw new HttpException('Lỗi gì òi :((', 500);
    }
  }
}
