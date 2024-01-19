import { Controller, Get, Inject } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
@Controller('app-config')
export class AppConfigController {
    constructor(private readonly configSerevice: AppConfigService) {
    }

    @Get('/menulist')
    getMenulist(){
        return this.configSerevice.getMenuList({})
    }

}
