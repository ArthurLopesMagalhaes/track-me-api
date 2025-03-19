import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Couriers } from '../entities/couriers';

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

  @IsNotEmpty()
  @IsEnum(Couriers)
  courier_code: string;
}
