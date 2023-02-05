import { Injectable } from '@nestjs/common';
import { createProfileModel } from 'src/Model/profilesModel';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) { }

  async createrProfile(data: createProfileModel): Promise<createProfileModel> {
    const profile = await this.prisma.contents.create({
      data: {
        id: uuidv4(),
        title: data.title,
        name: data.name,
        skips: data.skips,
        content: data.content,
        profilePic: data.profilePic,
        authorId: data.authorId,
        createAt: new Date(),
        updateAt: new Date()
      }
    })

    return profile;
  }
}


