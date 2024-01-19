import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  async use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug(`I am authenticating the request.`)
    console.log('Hello i am authnticator')
    const { authorization } = req.headers
    if (!authorization) throw new UnauthorizedException('Unauthorized Access')
    const [name, token] = authorization.split(' ')
    console.log(`Token type - ${name}`)
    if (!token) throw new UnauthorizedException('Unauthorized Access')
    try {
        const isValid = await verify(token, 'secret')
        if (!isValid) throw new UnauthorizedException('Unauthorized Access')
        console.log(`Valid Request`)
    } catch (error) {
        throw new UnauthorizedException('Unauthorized Access')
    }
    next();
  }
}