import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from 'src/config';
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      entities: [__dirname + "/**/*.entity.{js,ts}"],
      synchronize: true,
      retryAttempts: 2,
    }),
    UserModule
  ]
})
export class DatabaseModule { }