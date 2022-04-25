import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ip')
  newEndpoint(@Req() req): { ip: string } {
    const ip = req.ip || req.connection?.remoteAddress;

    console.log({
      ip,
    });

    return {
      ip,
    };
  }

  @Get('die')
  stopServer() {
    process.exit(1);
  }
}
