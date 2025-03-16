import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthError } from '@supabase/supabase-js';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      email: email,
      password: password,
    });

    if (user instanceof AuthError) {
      throw new HttpException(user.message, HttpStatus.UNAUTHORIZED);
    }

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return { user: user.user };
  }

  async signup(signupDto: SignupDto) {
    const { name, email, password } = signupDto;

    const user = await this.usersRepo.create({
      email: email,
      password: password,
      options: { data: { name: name } },
    });

    return { user };
  }

  async signout() {
    const signedOut = await this.usersRepo.signout();

    if (signedOut instanceof AuthError) {
      throw new HttpException(signedOut.message, HttpStatus.BAD_REQUEST);
    }

    return signedOut;
  }
}
