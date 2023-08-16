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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const profiles_service_1 = require("./profiles.service");
const profilesModel_1 = require("../Model/profilesModel");
const decorators_1 = require("@nestjs/common/decorators");
let ProfilesController = class ProfilesController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async CreateProfile(createProfile) {
        try {
            const create = await this.profileService.createrProfile(createProfile);
            if (create) {
                let res = {
                    result: true,
                    message: 'success',
                    data: create,
                };
                return res;
            }
            else {
                throw create;
            }
        }
        catch (error) {
            let res = {
                result: false,
                message: 'Create Profile Error',
                data: error,
            };
            return res;
        }
    }
    async GetProfile(data) {
        try {
            const result = await this.profileService.getProfile(data.id);
            if (result) {
                let res = {
                    result: true,
                    message: 'success',
                    data: result,
                };
                return res;
            }
            else {
                throw result;
            }
        }
        catch (error) {
            let res = {
                result: false,
                message: 'Get Profile Error',
                data: error,
            };
            return res;
        }
    }
};
__decorate([
    (0, common_1.Post)('/create-profile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profilesModel_1.createProfileModel]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "CreateProfile", null);
__decorate([
    (0, common_1.Get)('/GetProfile/'),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "GetProfile", null);
ProfilesController = __decorate([
    (0, common_1.Controller)('api/profiles'),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesController);
exports.ProfilesController = ProfilesController;
//# sourceMappingURL=profiles.controller.js.map