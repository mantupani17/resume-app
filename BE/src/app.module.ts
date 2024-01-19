import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app-config/app-config.module';
import { UtilsService } from './utils/utils.service';
import { RequestLoggerMiddleware } from './middlewares/request-logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from './utils/configuration';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'primary',
      useFactory: async (config: ConfigService) => {
        return ({
          uri: `${config.get('database.host')}/${config.get('database.dbName')}?retryWrites=true&w=majority`
        })
      },
      inject: [ConfigService],
    }),
    AppConfigModule,
    DatabaseModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).exclude(
      {path: '/auth/register', method:RequestMethod.POST},
      {path: '/auth/login', method:RequestMethod.POST}
    ).forRoutes({path:"*", method: RequestMethod.ALL})
  }
}
