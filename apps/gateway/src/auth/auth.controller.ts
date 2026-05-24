import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '@org/contracts/dto';
import { CreateUserAuthMessage, DefaultResponseMessage } from '@org/contracts/tcp-message';

@Controller('auth')
export class AuthController {

  constructor(
    @Inject('AUTH_SERVICE') private authService: ClientProxy,
  ) {}

  @Post('register')
  register(@Body() request: CreateUserDto) {
    const createUserAuthMessage: CreateUserAuthMessage = {
      email: request.email,
      password: request.password,
    }
    const response = this.authService.send<DefaultResponseMessage>({ cmd: 'create_user' }, createUserAuthMessage);

    return response;
  }
  
}
