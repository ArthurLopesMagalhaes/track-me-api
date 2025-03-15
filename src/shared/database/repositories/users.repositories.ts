import { Inject, Injectable } from '@nestjs/common';
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
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

  async findUnique(signinDto: SignInWithPasswordCredentials) {
    if ('email' in signinDto) {
      const { email, password } = signinDto;
      const signedIn = await this.supabaseService.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (signedIn.error) {
        return signedIn.error;
      }
      const user = await this.supabaseService.auth.getUser();

      if (!user) {
        return undefined;
      }

      return { user };
    }
  }
}
