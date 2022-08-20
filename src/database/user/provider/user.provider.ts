import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import * as Dto from '../dto';


@Injectable()
export class UserProvider {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>
  ) { }

  async create(data: Dto.CreateUserDto) {
    return await this._repository.create(data).save()
  }
}