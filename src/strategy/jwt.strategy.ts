import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('SECRET_KEY'),
    });
  }
  async validate(payload: any) {
    //thông tin giải mã của token khi xác minh thành công
    return payload;
  }

  // cài thư viện Authentication - JWT
  // yarn add @nestjs/config @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt
}
