import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controller/user.controller";
import { UserEntity } from "./user.entity";
import { UserProvider } from "./provider/user.provider";
import { UsersProvider } from "./provider/users.provider";
import { UsersController } from "./controller/users.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserProvider, UsersProvider],
  controllers: [UserController, UsersController]
})
export class UserModule { }