// ** User Repository: methods that call the database **

import { CallbackError } from 'mongoose';
import User, { IUser } from '../models/user.model';
import { IRegister } from './../interfaces/IRegister';

// New User
export const db_newUser = async (user: IUser): Promise<void> => {

    const newUser: IUser = new User(user);
    await newUser.save()
};

export const db_isEmailRegistered = async (email: string): Promise<boolean> => {

    return await User.findOne({ email: email }, async (err: CallbackError, user: IUser) => err || !user ? false : true)
};