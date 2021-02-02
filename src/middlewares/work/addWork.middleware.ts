import { Request, Response, NextFunction } from "express";
import { MISSING_TOKEN, REQUIRED_DATA_MISSING } from "../../constants/errors";
import { verifyUserAccount } from "../../helpers/jwt";
import { IWork } from "../../models/work.model";

const verifyPlainWork = (body: IWork) => {
    const { userID, position, company } = body

    if (typeof userID == "undefined" || typeof position == "undefined" || typeof company == "undefined")
        return false

    return true
}

export const verifyAddWork = (req: Request, res: Response, next: NextFunction) => {
    const { userID }: IWork = req.body
    if (!req.headers.authorization)
        return res.status(401).json({ error: MISSING_TOKEN })

    const isValidUser = verifyUserAccount(userID, <string>req.headers.authorization)
    if (!isValidUser)
        return res.status(401).json({ error: MISSING_TOKEN })

    const isValidWork = verifyPlainWork(req.body)
    if (!isValidWork)
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })


    next()
}

export const verifyUpdateWork = (req: Request, res: Response, next: NextFunction) => {
    const { _id, userID }: IWork = req.body


    if (!req.headers.authorization)
        return res.status(401).json({ error: MISSING_TOKEN })


    const isValidUser = verifyUserAccount(userID, <string>req.headers.authorization)
    if (!isValidUser)
        return res.status(401).json({ error: MISSING_TOKEN })


    if (!_id || !verifyPlainWork(req.body))
        return res.status(400).json({ error: REQUIRED_DATA_MISSING })

    next()
}