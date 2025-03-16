import { Inject, Injectable } from '@nestjs/common';
import { TypedSupabaseClient } from '../supabase.module';

@Injectable()
export class PackagesRepository {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabaseService: TypedSupabaseClient,
  ) {}
  create({ name, tracking_code, user_id, ship24_tracking_id }) {
    return this.supabaseService
      .from('packages')
      .insert({ name, tracking_code, user_id, ship24_tracking_id });
  }

  findByUserId(userId: string, options: { status: string }) {
    let query = this.supabaseService
      .from('packages')
      .select('*')
      .eq('user_id', userId);
    if (options.status !== 'all') {
      query = query.eq('status', options.status);
    }

    return query;
  }

  findByPackageId(packageId: string) {
    return this.supabaseService
      .from('packages')
      .select('*')
      .eq('ship24_tracking_id', packageId);
  }

  searchPackageWithOwnershipCheck(packageId: string, userId: string) {
    return this.supabaseService
      .from('packages')
      .select('*')
      .eq('user_id', userId)
      .eq('ship24_tracking_id', packageId);
  }
}
