import { Inject, Injectable } from '@nestjs/common';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { TypedSupabaseClient } from '../supabase.module';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabaseService: TypedSupabaseClient,
  ) {}
  create(createDto: SignUpWithPasswordCredentials) {
    return this.supabaseService.auth.signUp(createDto);
  }

  findUnique(findUniqueDto: SignUpWithPasswordCredentials) {
    return this.supabaseService.auth.signInWithPassword(findUniqueDto);
  }
}
