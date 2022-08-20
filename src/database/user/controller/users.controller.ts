import { Controller, Get } from "@nestjs/common";
import { UsersProvider } from "../provider/users.provider";

@Controller('/users')
export class UsersController {
  constructor(
    private usersProvider: UsersProvider
  ) { }

  @Get()
  findAll() {
    return this.usersProvider.findAll();
  }
}