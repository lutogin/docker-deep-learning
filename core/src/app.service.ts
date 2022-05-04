import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly authHost: string;
  private readonly tasksHost: string;
  private readonly loggerContext = 'Core.AppService';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.authHost = configService.get<string>('AUTH_INTERNAL_HOST');
    this.tasksHost = configService.get<string>('TASKS_INTERNAL_HOST');
  }

  async healthAuth(): Promise<Record<string, boolean>> {
    try {
      const { data: response } = await this.httpService
        .post(`${this.authHost}/validate`)
        .toPromise();

      return { validate: response };
    } catch (e) {
      Logger.error(e.message || e, e.stack, this.loggerContext);
    }
  }

  async validateToken(): Promise<boolean> {
    try {
      const { data: response } = await this.httpService
        .post(`${this.authHost}/validate`)
        .toPromise();

      return response;
    } catch (e) {
      Logger.error(e.message || e, e.stack, this.loggerContext);
    }
  }

  async createTask() {
    try {
      const { data: response } = await this.httpService
        .post(`${this.tasksHost}/tasks`)
        .toPromise();

      return response;
    } catch (e) {
      Logger.error(e.message || e, e.stack, this.loggerContext);
    }
  }
}
