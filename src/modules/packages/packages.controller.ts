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
  findAllByUserId(@Query('userId') userId: string) {
    return this.packagesService.findAllByUserId(userId);
  }

  @Get(':packageId')
  findOneById(
    @Param('packageId') packageId: string,
    @Query('userId') userId: string,
  ) {
    return this.packagesService.findOneById(packageId, userId);
  }
}
