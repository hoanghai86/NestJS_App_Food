import { userDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
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
  getBookmarkByUserId(user_id: number): Promise<userDto[]> {
    try {
      const data = this.prisma.user.findMany({
        where: {
          user_id: Number(user_id),
        },
      });
      console.log("success");
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
