import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages.service';
import { Ship24Service } from './ship24.service';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService, Ship24Service],
})
export class PackagesModule {}
