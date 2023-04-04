import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Authentication") //tạo group API trên trang swagger
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post("/login")
    login(): string {
        // check token
        return this.authService.login();
    }

    @Post("/signup")
    signup(): string {
        return this.authService.signup();
    }
}
