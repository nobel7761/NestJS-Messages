import { Body, Controller, Get, Post, Param } from '@nestjs/common';

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
  createMessage(@Body() body: any) {
    //we need to extract body from the incoming request
    console.log(body);
  }
}
