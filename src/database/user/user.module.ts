import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserProvider } from "./user.provider";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserProvider],
  controllers: [UserController]
})
export class UserModule { }