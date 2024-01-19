import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppConfig, AppConfigDocument } from '../schemas/app-config.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppConfigService {
    constructor(@InjectModel(AppConfig.name, 'primary') private readonly model: Model<AppConfigDocument>) {}

    getMenuList(query={}): Promise<AppConfig>{
        return this.model.findOne({name: 'MenuList', ...query})
    }
}
