import { NextFunction, Request, Response } from "express";
import { DATA_MISSING } from "../../constants/errors";
import { IRegister } from './../../interfaces/IRegister';

export const verifySignUpRequest = (req: Request, res: Response, next: NextFunction) => {
    const { user, education, work }: IRegister = req.body;

    if (!user)
        return res.status(400).json({ error: DATA_MISSING });

    if (typeof user.email == 'undefined' || typeof user.password == 'undefined')
        return res.status(400).json({ error: DATA_MISSING });

    if (education) {
        
    }

    if (work) {

    }

    next();
}