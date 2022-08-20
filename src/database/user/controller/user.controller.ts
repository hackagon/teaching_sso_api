import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserProvider } from "../provider/user.provider";
import * as Dto from '../dto';

@Controller('/users')
export class UserController {
  constructor(
    private userProvider: UserProvider
  ) { }

  @Post()
  create(
    @Body() data: Dto.CreateUserDto
  ) {
    return this.userProvider.create(data);
  }

  @Get(':userId')
  findById(
    @Param('userId') userId: string
  ) {
    return this.userProvider.findById(userId);
  }
}