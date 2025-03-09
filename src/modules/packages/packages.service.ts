import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PackagesRepository } from 'src/shared/database/repositories/packages.repositories';
import { CreatePackageDto } from './dto/create-package.dto';
import { Ship24Service } from './ship24.service';
import { ValidatePackageOwnershipService } from './validate-package-ownership.service';

@Injectable()
export class PackagesService {
  constructor(
    private readonly packagesRepo: PackagesRepository,
    private readonly ship24Service: Ship24Service,
    private readonly validatePackageOwnershipService: ValidatePackageOwnershipService,
  ) {}

  async create(createPackageDto: CreatePackageDto) {
    const { name, tracking_code, user_id } = createPackageDto;

    const ship24Response =
      await this.ship24Service.createTracking(tracking_code);

    const { data: packageData, error } = await this.packagesRepo
      .create({
        name,
        tracking_code,
        user_id,
        ship24_tracking_id: ship24Response.data.tracker.trackerId,
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
      await this.packagesRepo.findByUserId(userId);

    if (error) {
      throw new HttpException(
        'Failed to load packages',
        HttpStatus.BAD_REQUEST,
      );
    }

    return packagesList;
  }

  async findOneById(packageId: string, userId: string) {
    await this.validatePackageOwnershipService.validate(packageId, userId);

    const { data: packageData, error } =
      await this.packagesRepo.findByPackageId(packageId);

    if (error) {
      throw new HttpException(
        'Failed to load packages',
        HttpStatus.BAD_REQUEST,
      );
    }

    return packageData;
  }
}
