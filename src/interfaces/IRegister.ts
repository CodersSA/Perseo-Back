
import { IUser } from './../models/user.model';

export interface IRegister {
    user: IUser,
    education?: any,
    work?: any 
};