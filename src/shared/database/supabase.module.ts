import { Global, Module } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { env } from '../config/env';
import { Database } from './database.types';

export type TypedSupabaseClient = SupabaseClient<Database>;

const supabaseClient: SupabaseClient<Database> = createClient<Database>(
  env.supabaseURL,
  env.supabaseKey,
);

@Global()
@Module({
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useValue: supabaseClient,
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
