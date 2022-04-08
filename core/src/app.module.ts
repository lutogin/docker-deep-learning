import { Module } from '@nestjs/common';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { HttpModule } from '@nestjs/axios';
import configuration from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => {
    //     const MONGO_DATABASE = configService.get('MONGO_DATABASE');
    //     const MONGO_URI_SCHEME = configService.get('MONGO_URI_SCHEME');
    //     const MONGO_HOST = configService.get('MONGO_HOST');
    //     const MONGO_USERNAME = configService.get('MONGO_USERNAME');
    //     const MONGO_PASSWORD = configService.get('MONGO_PASSWORD');
    //
    //     const uri = `${MONGO_URI_SCHEME}://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`;
    //
    //     return {
    //       uri,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'data'),
    }),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
