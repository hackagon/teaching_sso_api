import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginateRaw } from "src/common/pagination";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import * as Dto from '../dto'

@Injectable()
export class UsersProvider {
  constructor(
    @InjectRepository(UserEntity) private _repository: Repository<UserEntity>
  ) { }

  async findAll(query: Dto.FindUsersDto) {
    return paginateRaw(
      this._repository.createQueryBuilder().select(),
      query.pagiParams
    )
  }
}