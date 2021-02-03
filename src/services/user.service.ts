
import { db_userById } from './../repositories/user.repository';
import { db_getEducations } from './../repositories/education.repository';
import { db_getWorks } from './../repositories/work.repository';
import e from 'express';

export const serv_getProfile = async (userID: string) => {
    try {
        const user = await db_userById(userID)
        const educations = await db_getEducations(userID)
        const works = await db_getWorks(userID)

        return { status: 200, result: { user, educations, works } }
    } catch (e) {
        return { status: 400, result: e.message }
    }
}