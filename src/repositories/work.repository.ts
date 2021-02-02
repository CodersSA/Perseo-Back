import Work, { IWork } from "../models/work.model"

export const db_addWork = async (work: IWork): Promise<void> => {
    const newWork = new Work(work)
    await newWork.save()
}