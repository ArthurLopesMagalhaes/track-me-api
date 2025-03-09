import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreatePackageDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  tracking_code: string;

  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}
