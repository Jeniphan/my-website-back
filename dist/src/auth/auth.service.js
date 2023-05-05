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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async signIn(username, pass) {
        const user = await this.prisma.users.findFirst({
            where: {
                username: username,
            },
        });
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException();
        }
        const payload = {
            username: user.username,
            name: user.name,
            email: user.email,
        };
        return {
            user: Object.assign(Object.assign({}, payload), { access_token: await this.jwtService.signAsync(payload) }),
        };
    }
    async register(userData) {
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
        let newPlayer = Object.assign(Object.assign({}, userData), { id: (0, uuid_1.v4)(), password: hash, salt: saltOrRounds });
        const create = await this.prisma.users.create({
            data: newPlayer,
        });
        return create;
    }
    async GetProfile(token) {
        const profile = await this.jwtService.decode(token);
        return profile;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map