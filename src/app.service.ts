import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumber(number1: number, number2: number): number {
    return Number(number1) + Number(number2);
  }
}
