import { Controller, Get } from "@nestjs/common";
import { IPaginationParamteters, Pagination } from "src/common/decorator/pagination.decorator";
import { UsersProvider } from "../provider/users.provider";

@Controller('/users')
export class UsersController {
  constructor(
    private usersProvider: UsersProvider
  ) { }

  @Get()
  findAll(
    @Pagination() pagiParams: IPaginationParamteters
  ) {
    const query = { pagiParams }
    return this.usersProvider.findAll(query);
  }
}