"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async GetUserInfoService(id) {
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
        let dataInfo = null;
        if (info) {
            dataInfo = {
                Id: info.id,
                Name: info.name,
                UserName: info.username,
                Email: info.email,
                PhoneNumber: info.phoneNumber,
                RoleName: info.role,
                Contacts: info.Contacts.map((contact) => {
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
                Educations: info.Educations.map((edu) => {
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
                Projects: info.Projects.map((pro) => {
                    return {
                        ProjectId: pro.id,
                        Title: pro.title,
                        Date: pro.date,
                        Discription: pro.discription,
                        Link: pro.link,
                    };
                }),
                Skills_front: info.Skills_front.map((front) => {
                    return {
                        id: front.id,
                        title: front.title,
                        discription: front.discription,
                        order: front.order,
                    };
                }),
                Skills_back: info.Skills_back.map((back) => {
                    return {
                        id: back.id,
                        title: back.title,
                        discription: back.discription,
                        order: back.order,
                    };
                }),
                Skills_soft: info.Skills_soft.map((soft) => {
                    return {
                        id: soft.id,
                        title: soft.title,
                        discription: soft.discription,
                        order: soft.order,
                    };
                }),
                Works: info.Works.map((work) => {
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
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map