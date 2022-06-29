import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // get hello method
  getHello(): any {
    return {
      msg: 'Hell NestJS',
    };
  }
}
