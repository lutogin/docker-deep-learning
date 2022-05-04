import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  health() {
    return 'ok';
  }

  @Post('auth')
  checkAuth() {
    return this.appService.healthAuth();
  }

  @Post('test')
  async test() {
    const validateToken = await this.appService.validateToken();
    const task = await this.appService.createTask();

    return {
      validateToken,
      task,
    };
  }

  @Get('die')
  die() {
    process.exit(1);
  }
}
