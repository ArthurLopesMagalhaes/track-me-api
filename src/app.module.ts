import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PackagesModule } from './modules/packages/packages.module';

import { DatabaseModule } from './shared/database/database.module';
import { SupabaseModule } from './shared/database/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    SupabaseModule,
    PackagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
