import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PackagesRepository } from 'src/shared/database/repositories/packages.repositories';
import { CreatePackageDto } from './dto/create-package.dto';
import { Ship24Service } from './ship24.service';

@Injectable()
export class PackagesService {
  constructor(
    private readonly packagesRepo: PackagesRepository,
    private readonly ship24Service: Ship24Service,
  ) {}

  async create(createPackageDto: CreatePackageDto) {
    const { name, tracking_code, user_id, ship24_tracking_id } =
      createPackageDto;

    const ship24Response =
      await this.ship24Service.createTracking(tracking_code);

    const { data: packageData, error } = await this.packagesRepo
      .create({
        name,
        tracking_code,
        user_id,
        ship24_tracking_id,
      })
      .select()
      .single();

    if (error) {
      throw new HttpException('Failed to save package', HttpStatus.BAD_REQUEST);
    }

    return packageData;
  }

  async findAllByUserId(userId: string) {
    const { data: packagesList, error } =
      await this.packagesRepo.findById(userId);

    if (error) {
      throw new HttpException(
        'Failed to load packages',
        HttpStatus.BAD_REQUEST,
      );
    }

    return packagesList;
  }
}
