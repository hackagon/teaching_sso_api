import { Body, Controller, Post } from "@nestjs/common";
import { UserProvider } from "./user.provider";

@Controller('/users')
export class UserController {
  constructor(
    private userProvider: UserProvider
  ) { }


  @Post()
  create(
    @Body() data
  ) {
    return this.userProvider.create(data);
  }
}