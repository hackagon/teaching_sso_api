import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { Match } from "src/common/match.decorator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  // @IsUnique()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Match('password')
  password2: string;
}