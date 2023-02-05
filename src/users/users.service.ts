import { Injectable, OnModuleInit } from '@nestjs/common';
import { userModel } from 'src/Model/userModel';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async CreateUser(dataUser: userModel): Promise<userModel> {
    dataUser.id = uuidv4();
    const user = await this.prisma.users.create(
      {
        data: dataUser
      }
    )

    return user;
  }

  async GetUser(id: string): Promise<userModel> {
    const user = await this.prisma.users.findFirst({
      where: {
        id: id
      }
    })
    return user
  }
}

