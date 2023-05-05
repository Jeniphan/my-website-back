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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const returnModel_1 = require("../Model/returnModel");
const auth_service_1 = require("./auth.service");
const AuthAPI_entity_1 = require("./Dto/AuthAPI.entity");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
        this.resultMessageModel = new returnModel_1.ResultMessageModel();
        this.resultMessageModel.message = 'success';
        this.resultMessageModel.result = true;
    }
    async SignIn(dataSignIn) {
        try {
            const result = await this.authService.signIn(dataSignIn.username, dataSignIn.password);
            this.resultMessageModel.data = result;
            return this.resultMessageModel;
        }
        catch (err) {
            this.resultMessageModel.message = err.message;
            this.resultMessageModel.result = false;
            this.resultMessageModel.data = err;
            return this.resultMessageModel;
        }
    }
    async Register(dataRegister) {
        try {
            const result = await this.authService.register(dataRegister);
            this.resultMessageModel.data = result;
            return this.resultMessageModel;
        }
        catch (err) {
            this.resultMessageModel.message = err.message;
            this.resultMessageModel.result = false;
            this.resultMessageModel.data = err;
            return this.resultMessageModel;
        }
    }
};
__decorate([
    (0, common_1.Post)('SignIn'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthAPI_entity_1.SignInEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignIn", null);
__decorate([
    (0, common_1.Post)('Register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthAPI_entity_1.userEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Register", null);
AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map