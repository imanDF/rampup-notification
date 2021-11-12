import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NotificationGateway } from './notification.gateway';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private notificationGateway:NotificationGateway) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  
  }
  @Post()
  async sendNotification(@Req() req, @Res() res): Promise<any> {
    try {
     this.notificationGateway.handleNotification(req.body);
     res.send({message:"Sent"});
    } catch (error) {
      res
        .status(400)
        .send({ message: 'error', body: { message: error.message } });
    }
  }
}
