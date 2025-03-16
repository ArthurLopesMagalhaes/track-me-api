import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  create(@Body() createPackageDto: CreatePackageDto) {
    return this.packagesService.create(createPackageDto);
  }

  @Get()
  findAllByUserId(
    @Query('userId') userId: string,
    @Query('status') status: string,
  ) {
    const options = { userId, status };
    return this.packagesService.findAllByUserId(userId, options);
  }

  @Get(':ship24TrackingId')
  findOneById(
    @Param('ship24TrackingId') ship24TrackingId: string,
    @Query('userId') userId: string,
  ) {
    return this.packagesService.findOneById(ship24TrackingId, userId);
  }
}
