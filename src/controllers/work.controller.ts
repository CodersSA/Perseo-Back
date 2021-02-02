import { Request, Response } from "express";
import { db_addWork, db_updateWork } from './../repositories/work.repository';
import { WORK_CREATED, WORK_UPDATED } from './../constants/logs';

export const addWorkToUser = async (req: Request, res: Response) => {
    try {
        await db_addWork(req.body)

        return res.status(201).json({ result: WORK_CREATED })
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}

export const updateWorkToUser = async (req: Request, res: Response) => {
    try {
        await db_updateWork(req.body)

        return res.status(200).json({ result: WORK_UPDATED })
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}