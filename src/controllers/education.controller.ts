import { Request, Response } from "express";
import { EDUCATION_CREATED, EDUCATION_UPDATED } from "../constants/logs";
import { db_addEducation, db_updateEducation } from './../repositories/education.repository';

export const addEducationToUser = async (req: Request, res: Response) => {
    try {
        await db_addEducation(req.body)

        return res.status(201).json({ result: EDUCATION_CREATED })
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}

export const updateEducation = async (req: Request, res: Response) => {
    try {
        await db_updateEducation(req.body)

        return res.status(200).json({ result: EDUCATION_UPDATED })
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}