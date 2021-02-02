import Education, { IEducation } from "../models/education.model"

export const db_addEducation = async (education: IEducation): Promise<void> => {
    const newEducation = new Education(education)
    await newEducation.save()
}