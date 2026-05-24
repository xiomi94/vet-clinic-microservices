import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserAuthMessage, DefaultResponseMessage } from '@org/contracts/tcp-message';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'create_user' })
  createUser(data: CreateUserAuthMessage): DefaultResponseMessage {
    return {  status: 'ok', message: 'User created successfully' };
  }

}
