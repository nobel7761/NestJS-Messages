import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getSingleMessage(@Param('id') id: string) {
    //we need to extract "/:id" out of the root of the route from the incoming request
    console.log(id);
    return this.messagesService.findOne(id);
  }

  @Post()
  //! step 4(apply that class to the request handler)
  createMessage(@Body() body: CreateMessageDto) {
    //we need to extract body from the incoming request
    console.log(body);
    console.log(body.content);
    return this.messagesService.create(body.content);
  }
}
