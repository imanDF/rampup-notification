import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets"

@WebSocketGateway({ cors: true })
export class NotificationGateway {
    @WebSocketServer()
    server;

    @SubscribeMessage('notification')
    handleNotification(dataParams:any):void{
        const {message} = dataParams;
        this.server.emit('notification',message)
    }

}

