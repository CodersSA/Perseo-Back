import Work, { IWork } from "../models/work.model"

export const db_addWork = async (work: IWork): Promise<void> => {
    const newWork = new Work(work)
    await newWork.save()
}

export const db_updateWork = async (work: IWork) => {
    await Work.findOneAndUpdate({ _id: work._id }, work)
}

export const db_getWorks = async (userID: string): Promise<IWork[]> => {
    return Work.find({ userID: userID })
}