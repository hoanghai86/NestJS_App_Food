import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private config: ConfigService) {}

  login(): string {
    // xử lý login

    // kiểm tra thông tin hợp lệ
    // jwt.sign(payload,secrect key, {expired})
    // let jwtToken = this.jwtService.sign({ data: { user_id: 1, name: "Kang", role: "ADMIN" } }, { secret: "NODE", expiresIn: "5m" });

    let jwtToken = this.jwtService.sign(
      { data: 'node 28' },
      { secret: this.config.get('SECRET_KEY'), expiresIn: '1y' },
    );

    return jwtToken;
  }

  signup(): string {
    // xử lý signup

    return '';
  }
}
