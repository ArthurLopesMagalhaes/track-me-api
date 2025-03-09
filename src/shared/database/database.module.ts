import { Global, Module } from '@nestjs/common';
import { PackagesRepository } from './repositories/packages.repositories';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [UsersRepository, PackagesRepository],
  exports: [UsersRepository, PackagesRepository],
})
export class DatabaseModule {}
