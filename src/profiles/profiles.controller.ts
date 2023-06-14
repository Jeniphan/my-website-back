import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ResultMessageModel } from 'src/Model/returnModel';
import { createProfileModel } from 'src/Model/profilesModel';
import { Param, Query } from '@nestjs/common/decorators';

@Controller('api/profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) { }

  @Post('/create-profile')
  async CreateProfile(
    @Body() createProfile: createProfileModel
  ): Promise<ResultMessageModel> {
    try {
      const create = await this.profileService.createrProfile(createProfile);

      if (create) {
        let res: ResultMessageModel = {
          result: true,
          message: "success",
          data: create
        }
        return res
      }
      else {
        throw create;
      }

    } catch (error) {
      let res: ResultMessageModel = {
        result: false,
        message: "Create Profile Error",
        data: error
      }
      return res
    }
  }

  @Get('/GetProfile/')
  async GetProfile(
    @Query() data
  ): Promise<ResultMessageModel> {
    try {
      console.log("GetProfile>>>>>", data.id);

      const result = await this.profileService.getProfile(data.id)
      if (result) {
        let res: ResultMessageModel = {
          result: true,
          message: "success",
          data: result
        }
        return res
      }
      else {
        throw result
      }
    } catch (error) {
      let res: ResultMessageModel = {
        result: false,
        message: "Get Profile Error",
        data: error
      }
      return res
    }
  }
}
