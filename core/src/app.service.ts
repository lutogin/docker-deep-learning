import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { SaveToFileDto } from './dto/save-to-file.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly authHost: string;
  private readonly loggerContext = 'Core.AppService';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.authHost = configService.get<string>('AUTH');
  }

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

  async healthAuth(): Promise<string> {
    try {
      const response = await this.httpService
        .get(`${this.authHost}/health`)
        .toPromise();

      return response.data;
    } catch (e) {
      Logger.error(e.message || e, e.stack, this.loggerContext);
    }
  }
}
