import { Body, Controller, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ResultMessageModel } from 'src/Model/returnModel';
import { createProfileModel } from 'src/Model/profilesModel';

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
}
