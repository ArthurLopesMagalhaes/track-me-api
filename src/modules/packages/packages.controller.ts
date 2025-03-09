import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  findAllById(@Query('userId') userId: string) {
    return this.packagesService.findAllByUserId(userId);
  }
}
