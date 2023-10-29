import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Get('/:id')
  getSingleMessage(@Param('id') id: string) {
    //we need to extract "/:id" out of the root of the route from the incoming request
    console.log(id);
  }

  @Post()
  //! step 4(apply that class to the request handler)
  createMessage(@Body() body: CreateMessageDto) {
    //we need to extract body from the incoming request
    console.log(body);
  }
}
