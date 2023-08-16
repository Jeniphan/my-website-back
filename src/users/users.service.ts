import { Injectable, OnModuleInit } from '@nestjs/common';
// import { userModel } from 'src/Model/userModel';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import {
  IContacts,
  IContent,
  IEducation,
  IGetUserInfo,
  IProjects,
  ISkillsBack,
  ISkillsFront,
  ISkillsSoft,
  IWork,
} from './Dto/users.entity';

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
        Contacts: {
          select: {
            id: true,
            platFormLink: true,
            platFormName: true,
            PlatFormTypes: true,
          },
        },
        Contents: {
          where: {
            isActive: true,
          },
        },
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

    let dataInfo: IGetUserInfo = null;
    if (info) {
      dataInfo = {
        Id: info.id,
        Name: info.name,
        UserName: info.username,
        Email: info.email,
        PhoneNumber: info.phoneNumber,
        RoleName: info.role,
        Contacts: info.Contacts.map((contact): IContacts => {
          return {
            ContactId: contact.id,
            PlatFormLink: contact.platFormLink,
            PlatFormName: contact.platFormName,
            PlatFormSlug: contact.PlatFormTypes.platFormSlug,
          };
        }),
        Content: {
          ContentId: info.Contents[0].id,
          Title: info.Contents[0].title,
          Skips: info.Contents[0].skips,
          Content: info.Contents[0].content,
          ProfilePic: info.Contents[0].profilePic,
          Name: info.Contents[0].name,
        },
        Educations: info.Educations.map((edu): IEducation => {
          return {
            EducationId: edu.id,
            StartDate: edu.start,
            EndDate: edu.end,
            EducationName: edu.name,
            Marjor: edu.marjor,
            Link: edu.link,
          };
        }),
        Personals: {
          PersonalsId: info.Personals[0].id,
          Title: info.Personals[0].title,
          Skips: info.Personals[0].skips,
          Content: info.Personals[0].content,
          Resume: info.Personals[0].resume,
        },
        Projects: info.Projects.map((pro): IProjects => {
          return {
            ProjectId: pro.id,
            Title: pro.title,
            Date: pro.date,
            Discription: pro.discription,
            Link: pro.link,
          };
        }),
        Skills_front: info.Skills_front.map((front): ISkillsFront => {
          return {
            id: front.id,
            title: front.title,
            discription: front.discription,
            order: front.order,
          };
        }),
        Skills_back: info.Skills_back.map((back): ISkillsBack => {
          return {
            id: back.id,
            title: back.title,
            discription: back.discription,
            order: back.order,
          };
        }),
        Skills_soft: info.Skills_soft.map((soft): ISkillsSoft => {
          return {
            id: soft.id,
            title: soft.title,
            discription: soft.discription,
            order: soft.order,
          };
        }),
        Works: info.Works.map((work): IWork => {
          return {
            id: work.id,
            start: work.start,
            end: work.end,
            name: work.name,
            marjor: work.marjor,
            link: work.link,
            order: work.order,
          };
        }),
      };
    }

    return dataInfo;
  }
}
