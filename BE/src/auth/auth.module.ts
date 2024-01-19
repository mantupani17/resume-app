import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { CVS, CVSSchema } from 'src/schemas/cvs.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema},
      {name: CVS.name, schema: CVSSchema}
    ], 'primary')
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
