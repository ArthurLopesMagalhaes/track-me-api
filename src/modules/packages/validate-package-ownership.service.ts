import { NotFoundException } from '@nestjs/common';
import { PackagesRepository } from 'src/shared/database/repositories/packages.repositories';

export class ValidatePackageOwnershipService {
  constructor(private readonly packagesRepo: PackagesRepository) {}

  async validate(packageId: string, userId: string) {
    console.log(this.packagesRepo);
    const isOwner = await this.packagesRepo.searchPackageWithOwnershipCheck(
      packageId,
      userId,
    );

    if (!isOwner) {
      throw new NotFoundException('Package not found');
    }
  }
}
