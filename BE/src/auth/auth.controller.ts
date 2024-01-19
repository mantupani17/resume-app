import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('register')
    register(@Body() body) {
        return this.authService.create(body)
    }

    @Post('login')
    async login(@Body() body) {
        const isExist = await this.authService.findOne(body.username)
        if(!isExist) throw new Error('Invalid Credentials.')
        if (isExist?.password && isExist.password == body.password) {
            const token = await this.authService.signUser(JSON.stringify(isExist))
            return {token}
        }

        if(isExist?.password && isExist.password != body.password) throw new Error('Invalid Credentials.')
    }

    @Get('profile')
    async getProfile(@Request() req) {
        const { authorization } = req.headers
        const [ name, token ] = authorization.split(' ')
        console.log(`Authorization Type - ${name}`)
        const user = await this.authService.verifyUser(token)
        const details = await this.authService.findDetails(user["_id"]) 
        return details?.length ? details[0] : {}
    }
}
