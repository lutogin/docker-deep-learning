import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { SaveToFileDto } from './dto/save-to-file.dto';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = 'Hello World!';
    console.log(' ---> msg', msg);
    return msg;
  }

  async saveToFile({ payload }: SaveToFileDto) {
    return fs.promises.writeFile(
      path.join(__dirname, '..', 'data', 'data.txt'),
      payload,
    );
  }
}
