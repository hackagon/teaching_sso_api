import { Body, Controller, Post } from "@nestjs/common";
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
}