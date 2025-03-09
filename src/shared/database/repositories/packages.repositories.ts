import { Inject, Injectable } from '@nestjs/common';
import { CreatePackageDto } from 'src/modules/packages/dto/create-package.dto';
import { TypedSupabaseClient } from '../supabase.module';

@Injectable()
export class PackagesRepository {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabaseService: TypedSupabaseClient,
  ) {}
  create(createDto: CreatePackageDto) {
    return this.supabaseService.from('packages').insert(createDto);
  }

  findById(userId: string) {
    return this.supabaseService
      .from('packages')
      .select('*')
      .eq('user_id', userId);
  }
}
