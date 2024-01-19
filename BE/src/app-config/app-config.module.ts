import { Module } from '@nestjs/common';
import { AppConfigController } from './app-config.controller';
import { AppConfigService } from './app-config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig, AppConfigSchema } from 'src/schemas/app-config.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: AppConfig.name, schema: AppConfigSchema}
    ], 'primary')
  ],
  controllers: [AppConfigController],
  providers: [AppConfigService]
})
export class AppConfigModule {}
