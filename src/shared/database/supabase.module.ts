import { Global, Module } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

const supabaseClient: SupabaseClient = createClient(
  'https://vcajqehiuwtwnpwxhzlt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjYWpxZWhpdXd0d25wd3hoemx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDcxMzksImV4cCI6MjA1NzAyMzEzOX0.wZfShUI4xJDZgVBhKCBD6PyXYmtl_MTtUlz-cFlsDfM',
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
