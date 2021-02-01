import { NextFunction, Request, Response } from "express";
import { DATA_MISSING } from "../../constants/errors";
import { ILogin } from './../../interfaces/ILogin';

export const verifySignInRequest = (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: ILogin = req.body;

    if (!email || !password)
        return res.status(400).json({ error: DATA_MISSING });

    if (typeof email == 'undefined' || typeof password == 'undefined')
        return res.status(400).json({ error: DATA_MISSING });

    next();
}