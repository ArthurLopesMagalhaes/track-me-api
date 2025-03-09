import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages.service';
import { Ship24Service } from './ship24.service';
import { ValidatePackageOwnershipService } from './validate-package-ownership.service';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService, Ship24Service, ValidatePackageOwnershipService],
})
export class PackagesModule {}
