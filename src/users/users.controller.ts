import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ResultMessageModel } from 'src/Model/returnModel';
import { UsersService } from './users.service';
// import { userModel } from 'src/Model/userModel';

@Controller('api/users')
export class UsersController {
  private resultMessageMode = new ResultMessageModel();
  constructor(private userService: UsersService) {
    this.resultMessageMode.message = 'success';
    this.resultMessageMode.result = true;
  }
  @Get('UserInfo')
  async GetUserInfo(@Query('id') id: string): Promise<ResultMessageModel> {
    try {
      const results = await this.userService.GetUserInfoService(id);
      this.resultMessageMode.data = results;
      return this.resultMessageMode;
    } catch (err) {
      this.resultMessageMode.message = err.message;
      this.resultMessageMode.result = false;
      this.resultMessageMode.data = err;
      return this.resultMessageMode;
    }
  }
}
