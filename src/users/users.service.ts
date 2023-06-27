import { Injectable, OnModuleInit } from '@nestjs/common';
// import { userModel } from 'src/Model/userModel';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async GetUserInfoService(id: string): Promise<any> {
    const info = await this.prisma.users.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        phoneNumber: true,
        role: true,
        Contacts: true,
        Contents: true,
        Educations: {
          orderBy: {
            order: 'desc',
          },
        },
        Personals: true,
        Projects: true,
        Skills_front: {
          orderBy: {
            order: 'desc',
          },
        },
        Skills_back: {
          orderBy: {
            order: 'desc',
          },
        },
        Skills_soft: {
          orderBy: {
            order: 'desc',
          },
        },
        Works: {
          orderBy: {
            order: 'desc',
          },
        },
      },
    });

    return info;
  }
}
