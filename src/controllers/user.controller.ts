import { Request, Response } from "express";
import { getIdFromPayload } from "../helpers/jwt";
import { serv_getProfile } from "../services/user.service";

export const getProfile = async (req: Request, res: Response) => {
    const userID = getIdFromPayload(<string>req.headers.authorization)
    const {status, result} = await serv_getProfile(userID)

    return res.status(status).json({result: result})
}