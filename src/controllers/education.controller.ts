import { Request, Response } from "express";
import { EDUCATION_CREATED } from "../constants/logs";
import { IEducation } from './../models/education.model';
import { db_addEducation } from './../repositories/education.repository';

export const addEducationToUser = async (req: Request, res: Response) => {
    try {
        await db_addEducation(req.body)

        return res.status(201).json({ result: EDUCATION_CREATED })
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}