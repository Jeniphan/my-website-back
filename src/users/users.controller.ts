import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultMessageModel } from 'src/Model/returnModel';
import { UsersService } from './users.service';
import { userModel } from 'src/Model/userModel';

@Controller('api/users')
export class UsersController {

  constructor(private userService: UsersService) { }

  @Get()
  async getUser(id: string): Promise<ResultMessageModel> {
    try {
      const result = await this.userService.GetUser(id);
      if (result) {
        let responst: ResultMessageModel = {
          result: true,
          message: "Success",
          data: result
        }
        return responst
      }
      else {
        throw result;
      }
    } catch (error) {
      let responst: ResultMessageModel = {
        result: false,
        message: "Get user Error",
        data: error
      }
      return responst;
    }
  }

  @Post('/register')
  async CreateUser(
    @Body() createUser: userModel
  ): Promise<ResultMessageModel> {
    try {
      const result = await this.userService.CreateUser(createUser)
      if (result) {
        let results: ResultMessageModel = {
          result: false,
          message: "Create User Have Error",
          data: result
        }

        return results;
      }
      else {
        throw result;
      }
    }
    catch (err) {
      let result: ResultMessageModel = {
        result: false,
        message: "Create User Have Error",
        data: err
      }
      return result
    }
  }

}
