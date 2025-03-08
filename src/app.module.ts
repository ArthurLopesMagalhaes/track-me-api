import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { SupabaseModule } from './shared/database/supabase.module';

@Module({
  imports: [UsersModule, AuthModule, DatabaseModule, SupabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
