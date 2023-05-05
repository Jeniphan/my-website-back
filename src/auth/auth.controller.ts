import { Body, Controller, Post } from '@nestjs/common';
import { ResultMessageModel } from 'src/Model/returnModel';
import { AuthService } from './auth.service';
import { SignInEntity, userEntity } from './Dto/AuthAPI.entity';

@Controller('api/auth')
export class AuthController {
  private resultMessageModel = new ResultMessageModel();
  constructor(private authService: AuthService) {
    this.resultMessageModel.message = 'success';
    this.resultMessageModel.result = true;
  }

  @Post('SignIn')
  async SignIn(@Body() dataSignIn: SignInEntity): Promise<ResultMessageModel> {
    try {
      const result = await this.authService.signIn(
        dataSignIn.username,
        dataSignIn.password,
      );
      this.resultMessageModel.data = result;
      return this.resultMessageModel;
    } catch (err) {
      this.resultMessageModel.message = err.message;
      this.resultMessageModel.result = false;
      this.resultMessageModel.data = err;
      return this.resultMessageModel;
    }
  }

  @Post('Register')
  async Register(@Body() dataRegister: userEntity) {
    try {
      const result = await this.authService.register(dataRegister);
      this.resultMessageModel.data = result;
      return this.resultMessageModel;
    } catch (err) {
      this.resultMessageModel.message = err.message;
      this.resultMessageModel.result = false;
      this.resultMessageModel.data = err;
      return this.resultMessageModel;
    }
  }
}
