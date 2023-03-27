import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(): string {
    let token = this.jwtService.sign({},{})
    return 'token';
  }

  sigup(): string {
    return '';
  }
}
