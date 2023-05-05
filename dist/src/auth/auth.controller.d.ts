import { ResultMessageModel } from 'src/Model/returnModel';
import { AuthService } from './auth.service';
import { SignInEntity, userEntity } from './Dto/AuthAPI.entity';
export declare class AuthController {
    private authService;
    private resultMessageModel;
    constructor(authService: AuthService);
    SignIn(dataSignIn: SignInEntity): Promise<ResultMessageModel>;
    Register(dataRegister: userEntity): Promise<ResultMessageModel>;
}
