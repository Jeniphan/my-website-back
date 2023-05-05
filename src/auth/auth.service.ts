import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { userEntity } from './Dto/AuthAPI.entity';
import { v4 as uuidv4 } from 'uuid';
import { Users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async signIn(username: string, pass: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        username: username,
      },
    });

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: user.username,
      name: user.name,
      email: user.email,
    };

    return {
      user: {
        ...payload,
        access_token: await this.jwtService.signAsync(payload),
      },
    };
  }

  async register(userData: userEntity): Promise<Users | string> {
    const saltOrRounds = await bcrypt.genSaltSync();
    const hash = await bcrypt.hashSync(userData.password, saltOrRounds);

    const checkUsername = await this.prisma.users.findFirst({
      where: {
        username: userData.username,
      },
    });

    if (checkUsername) {
      return 'Username tekan';
    }

    let newPlayer = {
      ...userData,
      id: uuidv4(),
      password: hash,
      salt: saltOrRounds,
    };

    const create = await this.prisma.users.create({
      data: newPlayer,
    });

    return create;
  }

  async GetProfile(token: string): Promise<any> {
    const profile = await this.jwtService.decode(token);
    return profile;
  }
}
