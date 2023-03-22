
import { userDto } from './dto/user.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class UserService {
  private prisma: PrismaClient = new PrismaClient();

  getUser(hoTen: string): Promise<userDto[]> {
    return this.prisma.user.findMany({
      where: { full_name: { contains: hoTen } },
    });
  }

  //code sai chỗ nào
 async search(user_id: number)  {
    try {
      const data = await this.prisma.user.findMany({
        where: {
          user_id: Number(user_id),
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new HttpException("Lỗi gì òi :((", 500)
    }
  }
}
