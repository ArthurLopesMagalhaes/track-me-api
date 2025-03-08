import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique(signinDto);
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
}
