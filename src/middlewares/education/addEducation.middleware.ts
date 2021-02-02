import { NextFunction, Request, Response } from "express";
import { REQUIRED_DATA_MISSING } from "../../constants/errors";
import { IEducation } from './../../models/education.model';
import { getIdFromPayload } from './../../helpers/jwt';

export const verifyAddEducation = (req: Request, res: Response, next: NextFunction) => {

    const { userID, titulation, center }: IEducation = req.body

    if (typeof userID == "undefined" || typeof titulation == "undefined" || typeof center == "undefined" || !req.headers.authorization)
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })

    const authorization = <string>req.headers.authorization
    const tokenID = getIdFromPayload(authorization)
    if (userID !== tokenID)
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })

    next()
}