import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { createProfileModel } from 'src/Model/profilesModel';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) { }

  async createrProfile(data: createProfileModel): Promise<string> {
    // const profile = await this.prisma.contents.create({
    //   data: {
    //     id: uuidv4(),
    //     title: data.title,
    //     name: data.name,
    //     skips: data.skips,
    //     content: data.content,
    //     profilePic: data.profilePic,
    //     authorId: data.authorId,
    //     createAt: new Date(),
    //     updateAt: new Date()
    //   }
    // })
    const profile = ""
    return profile;
  }

  async getProfile(id: string): Promise<Users> {
    const profile = await this.prisma.users.findUnique({
      where: {
        id: id
      },
      include: {
        Contents: true,
        Personals: true,
        Educations: true,
        Works: true,
        Skills_front: true,
        Skills_back: true,
        Skills_soft: true,
        Projects: true,
        Contacts: true

      }
    })
    return profile;
  }
}


