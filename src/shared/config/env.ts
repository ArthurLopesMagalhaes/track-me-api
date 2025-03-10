import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  supabaseURL: string;

  @IsString()
  @IsNotEmpty()
  supabaseKey: string;

  @IsString()
  @IsNotEmpty()
  ship24BaseURL: string;

  @IsString()
  @IsNotEmpty()
  ship24ApiKey: string;

  @IsString()
  @IsNotEmpty()
  ship24WebhookSecret: string;
}

export const env: Env = plainToInstance(Env, {
  supabaseURL: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
  ship24BaseURL: process.env.SHIP_24_BASE_URL,
  ship24ApiKey: process.env.SHIP_24_KEY,
  ship24WebhookSecret: process.env.SHIP_24_WEBHOOK_SECRET,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
