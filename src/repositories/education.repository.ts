import Education, { IEducation } from "../models/education.model"

export const db_addEducation = async (education: IEducation): Promise<void> => {
    const newEducation = new Education(education)
    await newEducation.save()
}

export const db_updateEducation = async (education: IEducation) => {
    await Education.findOneAndUpdate({_id: education._id}, education)
}