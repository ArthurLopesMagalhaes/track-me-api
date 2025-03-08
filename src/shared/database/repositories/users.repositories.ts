import { Inject, Injectable } from '@nestjs/common';
import {
  SignUpWithPasswordCredentials,
  SupabaseClient,
} from '@supabase/supabase-js';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabaseService: SupabaseClient,
  ) {}
  create(createDto: SignUpWithPasswordCredentials) {
    return this.supabaseService.auth.signUp(createDto);
  }

  findUnique(findUniqueDto: SignUpWithPasswordCredentials) {
    return this.supabaseService.auth.signInWithPassword(findUniqueDto);
  }
}
