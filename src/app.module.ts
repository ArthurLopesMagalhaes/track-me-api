import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PackagesModule } from './modules/packages/packages.module';

import { WebhookModule } from './modules/webhook/webhook.module';
import { DatabaseModule } from './shared/database/database.module';
import { SupabaseModule } from './shared/database/supabase.module';
import { NotificationModule } from './modules/notification/notification.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    SupabaseModule,
    PackagesModule,
    WebhookModule,
    NotificationModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
