import { ProfilesService } from './profiles.service';
import { ResultMessageModel } from 'src/Model/returnModel';
import { createProfileModel } from 'src/Model/profilesModel';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    CreateProfile(createProfile: createProfileModel): Promise<ResultMessageModel>;
    GetProfile(data: any): Promise<ResultMessageModel>;
}
