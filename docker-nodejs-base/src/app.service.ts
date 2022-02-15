import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = 'Hello World!';
    console.log(' ---> msg', msg);
    return msg;
  }
}
