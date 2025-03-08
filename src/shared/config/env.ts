import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  supabaseURL: string;

  @IsString()
  @IsNotEmpty()
  supabaseKey: string;
}

export const env: Env = plainToInstance(Env, {
  supabaseURL: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
