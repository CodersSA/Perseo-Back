import { NextFunction, Request, Response } from "express";
import { MISSING_TOKEN, REQUIRED_DATA_MISSING } from "../../constants/errors";
import { IEducation } from './../../models/education.model';
import { getIdFromPayload, verifyUserAccount } from './../../helpers/jwt';

const verifyPlainEducation = (body: IEducation) => {
    const { userID, titulation, center } = body

    if (typeof userID == "undefined" || typeof titulation == "undefined" || typeof center == "undefined")
        return false

    return true
}

export const verifyAddEducation = (req: Request, res: Response, next: NextFunction) => {
    const { userID }: IEducation = req.body

    if (!req.headers.authorization)
        return res.status(401).json({ error: MISSING_TOKEN })


    const isValidUser = verifyUserAccount(userID, <string>req.headers.authorization)
    if (!isValidUser)
        return res.status(401).json({ error: MISSING_TOKEN })


    const isValidEducation = verifyPlainEducation(req.body)
    if (!isValidEducation)
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })


    next()
}

export const verifyUpdateEducation = (req: Request, res: Response, next: NextFunction) => {
    const { _id, userID }: IEducation = req.body


    if (!req.headers.authorization)
        return res.status(401).json({ error: MISSING_TOKEN })


    const isValidUser = verifyUserAccount(userID, <string>req.headers.authorization)
    if (!isValidUser)
        return res.status(401).json({ error: MISSING_TOKEN })


    if (!_id || !verifyPlainEducation(req.body))
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })

    next()
}