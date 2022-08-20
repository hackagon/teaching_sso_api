import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";

@Injectable()
export class UsersProvider {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>
  ) { }

  async findAll() {
    return await this._repository.find();
  }
}