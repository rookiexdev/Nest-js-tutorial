import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealthCheck () {
    return {
      meassage: "Ready to serve!",
      status: 200,
      success: true
    }
  }
}
