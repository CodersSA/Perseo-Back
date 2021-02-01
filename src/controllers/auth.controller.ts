import { Request, Response } from "express";
import { db_isEmailRegistered, db_newUser } from "../repositories/user.repository";
import { IRegister } from './../interfaces/IRegister';
import { SIGNUP_EMAIL_REGISTERED } from './../constants/errors';
import { USER_CREATED } from "../constants/logs";

// Register
export const signUp = async (req: Request, res: Response): Promise<Response> => {

    try {
        const { user, education, work }: IRegister = req.body;

        const isRegistered = await db_isEmailRegistered(user.email);
        if (isRegistered)
            throw new Error(SIGNUP_EMAIL_REGISTERED);


        await db_newUser(user)
        

        return res.status(201).json({ result: USER_CREATED });

    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
};