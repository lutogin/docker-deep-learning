import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SaveToFileDto } from './dto/save-to-file.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  saveToFile(@Body() data: SaveToFileDto) {
    return this.appService.saveToFile(data);
  }

  @Get('/check/auth')
  checkAuth() {
    return this.appService.healthAuth();
  }
}
