import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/home")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health-check")
  getHealth() {
    return this.appService.getHealthCheck();
  }

  @Get("random/:id")
  random(@Param("id") id: string) {
    return { id }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
