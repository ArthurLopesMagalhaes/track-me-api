import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const { name, tracking_code, user_id, courier_code } = createPackageDto;

    const ship24Response = await this.ship24Service.createTracking({
      courierCode: courier_code,
      trackingNumber: tracking_code,
    });

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

  async findAllByUserId(userId: string, options: { status: string }) {
    const { data: packagesList, error } = await this.packagesRepo.findByUserId(
      userId,
      options,
    );

    if (error) {
      throw new HttpException(
        'Failed to load packages',
        HttpStatus.BAD_REQUEST,
      );
    }

    return packagesList;
  }

  async findOneById(ship24TrackingId: string, userId: string) {
    const isOwner = await this.packagesRepo.searchPackageWithOwnershipCheck(
      ship24TrackingId,
      userId,
    );

    if (!isOwner) {
      throw new NotFoundException('Package not found');
    }

    // const { data: packageData } =
    //   await this.ship24Service.getTrackingDetails(ship24TrackingId);
    const packageData =
      await this.ship24Service.getTrackingDetails(ship24TrackingId);

    return packageData;
  }
}
