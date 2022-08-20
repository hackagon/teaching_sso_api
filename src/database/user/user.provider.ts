import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

interface UserDto {
  email: string
}

@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>
  ) { }

  async create(data: UserDto) {
    return await this._repository.create(data).save()
  }
}