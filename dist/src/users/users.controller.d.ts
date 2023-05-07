import { ResultMessageModel } from 'src/Model/returnModel';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    private resultMessageMode;
    constructor(userService: UsersService);
    GetUserInfo(id: string): Promise<ResultMessageModel>;
}
