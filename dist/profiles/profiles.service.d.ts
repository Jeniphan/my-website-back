import { Users } from '@prisma/client';
import { createProfileModel } from 'src/Model/profilesModel';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    createrProfile(data: createProfileModel): Promise<string>;
    getProfile(id: string): Promise<Users>;
}
