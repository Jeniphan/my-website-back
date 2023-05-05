import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { userEntity } from './Dto/AuthAPI.entity';
import { Users } from '@prisma/client';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    signIn(username: string, pass: string): Promise<{
        user: {
            access_token: string;
            username: string;
            name: string;
            email: string;
        };
    }>;
    register(userData: userEntity): Promise<Users | string>;
    GetProfile(token: string): Promise<any>;
}
