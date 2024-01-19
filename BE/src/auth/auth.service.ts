import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { sign, verify } from 'jsonwebtoken'

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name, 'primary') private readonly model: Model<UserDocument>){}

    create(body:any):Promise<User>{
        return this.model.create(body)
    }

    findAll(query={}, limit=10, skip=0) {
        return this.model.find(query).skip(skip).limit(limit)
    }

    findOne(username:string) {
        return this.model.findOne({username})
    }

    async signUser(payload) {
        return await sign(payload, 'secret')
    }

    async verifyUser(token:string) {
        return await verify(token, 'secret')
    }

    async findDetails(id:string) {
        return this.model.aggregate([
            { $match: {
                _id:new mongoose.Types.ObjectId(id) 
            }},
            {
                $lookup: {
                    from: 'cvs',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'details'
                }
            }
        ])
    }
}
