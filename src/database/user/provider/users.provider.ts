import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginateRaw } from "src/common/pagination";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";

@Injectable()
export class UsersProvider {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>
  ) { }

  async findAll() {
    // return await this._repository.find();
    return paginateRaw(
      this._repository.createQueryBuilder().select(),
      {
        limit: 2,
        page: 4,
        route: 'localhost:3000/api/users'
      }
    )
  }
}