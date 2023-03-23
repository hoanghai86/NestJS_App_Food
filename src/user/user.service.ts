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
  async search(user_id: number): Promise<{ message: string; data: userDto[] }> {
    try {
      const data = await this.prisma.user.findMany({
        where: {
          user_id: user_id,
        },
      });
      if (data.length > 0) {
        return { message: 'Kết quả tìm được!', data };
      } else return { message: 'Không tìm thấy!', data };
    } catch (error) {
      throw new HttpException('Lỗi backend', 500);
    }
  }
}
